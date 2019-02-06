export const BILLS= [
    {
      // to identify group
      groupInformationId: 1,
      // Name of the group
      name: 'Granville st',
      //information for individual bill
      bill: [
        {
          id: 1,
          date: '1 jan',
          description: 'test individual bill',
          amountPaid: 50,
          divideEqually: true,
          billDate: 'date of creation',
          members: ['firstOne', 'secondOne'],
        },
        {
          id: 2,
          date: '2 jan',
          description: 'test 2',
          amountPaid: 90,
          divideEqually: true,
          billDate: '',
          members: ['other', 'othername']
        },
        {
          id: 3,
          date: '3 jan',
          description: 'test 3',
          amountPaid: 100,
          divideEqually: true,
          billDate: '',
          members: ['someOther', 'otherOtherName']
        }
      ]
    }
];