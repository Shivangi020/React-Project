export const JobFilter = [
 
    {
      filterTitle: "Company Type",
      filterOption: [
        { label: "Corporate", value: 3 },
        { label: "Startups", value: 0 },
        { label: "Foreign MNCs", value: 2 },
        { label: "Indian MNCs", value: 1 },
      ],
    },
  
    {
      filterTitle: "Work Mode",
      filterOption: [
        { label: "Work From Office", value: 0 },
        { label: "Work From Home", value: 1 },
        { label: "Hybrid", value: 2 },
        {label:'Temp WFH' , value:3}
      ],
    },
  
    {
      filterTitle: "Education",
      filterOption: [
        { label: "B.Tech/BE", value: 'B.Tech/BE' },
        { label: "BSc", value: 'BSc' },
        { label: "Diploma", value: 'Diploma'},
        { label: "MBA/PGDM", value: 'MBA/PGDM' },
        { label: "MCA", value: 'MCA' },
        { label: "MS/MSc", value: 'MS/MSc' },
        { label: "M.Tech", value: 'M.Tech'},
        { label: "Any Postgraduate", value: 'Anygrad'},
        { label: "Graduation not Required", value:'GradNotReq' },
      ],
    },
  
    {
      filterTitle: "Location",
      filterOption: [
        { value: "Banglore", label: "Banglore" },
        { value: "Pune", label: "Pune" },
        { value: "Mumbai", label: "Mumbai" },
        { value: "Noida", label: "Noida" },
        { value: "Delhi", label: "Delhi" },
        { value: "Other", label: "Other" },
      ],
    },
    {
      filterTitle:'Role',
      filterOption:[
        {value:'Intern' ,label:'Intern'},
        {value:'Software Developer' ,label:'Software Developer'},
        {value:'Designer' ,label:'Designer'},
        {value:'Manager' ,label:'Manager'},
      ]
    },
  
    {
      filterTitle:'Rating',
      filterOption:[
        {value:'5' ,label:'5'},
        {value:'4' ,label:'4'},
        {value:'3' ,label:'3'},
        {value:'2' ,label:'2'},
      ]
    }
  ];
  