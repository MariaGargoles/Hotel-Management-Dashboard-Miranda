import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessagesListThunk, deleteMessageThunk } from '../../features/Messages/MessagesThunk';
import { TableComponent } from '../TableComponent/TableComponent';
import { ContactButton } from './ContactStyled';
import { SelectorContainer, Selector } from '../RoomComponent/RoomStyled';
import { TableContainer, TableFilters, TableButtonFilter } from '../ContactComponent/ContactStyled';
import Swal from 'sweetalert2';
import { RootState, AppDispatch } from '../../app/store';
import { ContactMessage, ColumnType } from '../../types/global';
import { format } from 'date-fns';

export const ContactMessagesComponent: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const contactList = useSelector((state: RootState) => state.contact.data as ContactMessage[]);
    const contactStatus = useSelector((state: RootState) => state.contact.status);
    const contactError = useSelector((state: RootState) => state.contact.error);
    const [sortOption, setSortOption] = useState('');
    const [filteredContacts, setFilteredContacts] = useState<ContactMessage[]>([]);

    useEffect(() => {
        if (contactStatus === 'idle') {
            dispatch(fetchMessagesListThunk());
        } else if (contactStatus === 'fulfilled') {
            setFilteredContacts(contactList);
        } else if (contactStatus === 'rejected' && contactError) {
            Swal.fire('Error!', `Failed to fetch contacts: ${contactError}`, 'error');
        }
    }, [contactStatus, dispatch, contactError, contactList]);

    useEffect(() => {
        setFilteredContacts(contactList);
    }, [contactList]);

    const columns: ColumnType<ContactMessage>[] = [
        { headerColumn: 'Order ID', columnsData: '_id' },
        { 
            headerColumn: 'Date', 
            columnsData: 'date', 
            columnRenderer: (row: ContactMessage) => (
                <span>{format(new Date(row.date), 'dd/MM/yyyy')}</span>
            ) 
        },
        { headerColumn: 'Name', columnsData: 'name' },
        { headerColumn: 'Email', columnsData: 'email' },
        { headerColumn: 'Subject', columnsData: 'subject' },
        { headerColumn: 'Comment', columnsData: 'comment' },
        {
            headerColumn: 'Action',
            columnsData: 'action', 
            columnRenderer: (row: ContactMessage) => (
                <ContactButton status={row.action}>
                    {row.action}
                </ContactButton>
            )
        }
    ];

    const filterActions = {
        all: () => setFilteredContacts(contactList),
        archived: () => setFilteredContacts(contactList.filter(contact => contact.action === 'archived')),
        published: () => setFilteredContacts(contactList.filter(contact => contact.action === 'publish'))
    };

    const handleFilterClick = (action: 'all' | 'archived' | 'published') => {
        filterActions[action]();
    };

    const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const sortValue = event.target.value;
        setSortOption(sortValue);
        const sortedData = [...filteredContacts].sort((a, b) => {
            switch (sortValue) {
                case 'dateNewest':
                    return new Date(b.date.split('/').reverse().join('-')).getTime() - new Date(a.date.split('/').reverse().join('-')).getTime();
                case 'dateOldest':
                    return new Date(a.date.split('/').reverse().join('-')).getTime() - new Date(b.date.split('/').reverse().join('-')).getTime();
                default:
                    return 0;
            }
        });
        setFilteredContacts(sortedData);
    };

    const handleDeleteContact = (contactId: string) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteMessageThunk(contactId)); 
            }
        });
    };

    return (
        <TableContainer>
            <TableFilters>
                <TableButtonFilter onClick={() => handleFilterClick('all')}>All Contacts</TableButtonFilter>
                <TableButtonFilter onClick={() => handleFilterClick('archived')}>Archived</TableButtonFilter>
                <TableButtonFilter onClick={() => handleFilterClick('published')}>Published</TableButtonFilter>
            </TableFilters>
            <SelectorContainer>
                <Selector value={sortOption} onChange={handleSortChange}>
                    <option value="">Sort By</option>
                    <option value="dateNewest">Date Newest to Oldest</option>
                    <option value="dateOldest">Date Oldest to Newest</option>
                </Selector>
            </SelectorContainer>
            <TableComponent columns={columns} data={filteredContacts} />
        </TableContainer>
    );
};
