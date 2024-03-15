const columns = [
    {
      Header: 'ID',
      accessor: 'id',
    },
    {
      Header: 'Name',
      accessor: 'name',
    },
    {
      Header: 'Category',
      accessor: 'category',
    },
    {
      Header: 'Subcategory',
      accessor: 'subcategory',
    },
    {
      Header: 'Price',
      accessor: 'price',
    },
    {
      Header: 'Sales Price',
      accessor: 'salesPrice',
    },
    {
      Header: 'Created At',
      accessor: 'createdAt',
      Cell: ({ value }) => {
        // Format the date here if needed
        return value;
      },
    },
    {
      Header: 'Updated At',
      accessor: 'updatedAt',
      Cell: ({ value }) => {
        // Format the date here if needed
        return value;
      },
    },
  ];
  
  export default columns;
  