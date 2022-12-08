import { useEffect, useState } from 'react';
import './App.css';
import { WindowContextProvider } from './Contexts/WindowContext';
import FormInput from './Components/UI/molecules/form-input/FormInput';

function App() {
	// const [darkMode, setDarkMode] = useState(false)

	// const changeTheme = () =>{
	// 	setDarkMode(!darkMode)
	// }

	

	const [fieldList, setFieldList] = useState({
        name:'',
		email:'',
		password:'',
		nim:'',
		search:'',
		comment:'',
		phoneNumber:'',
		selectClass:'',
		count:null,

		darkMode:true,
		hobby:false,
		filter:[],

    })


	const [fieldInfo, setFieldInfo] = useState({
		error:{},
		warning:{},
		success:{}
	})

	const fieldSchemasSearch = [
		{
            field:'darkMode',
            label:'Dark Mode',
			type:'toggleThick',
            placeholder:'Active',
            isDisabled:false,
			warningValidationList:{
			},
			errorValidationList:{}
        },
		{
            field:'hobby',
            label:'Hobby',
			type:'checkbox',
            placeholder:'',
            isDisabled:false,
			warningValidationList:{
				isRequired:true,
			},
			errorValidationList:{}
        },
		{
            field:'filter',
			type:'inputMultiSelection',
			placeholder:'--- Option ---',
			label:'Filter',
			isSearchInput:true,
            isDisabled:false,
			listSelection:[
				{
					title:'Kelas Informatika',
					list:[
						{
							value:'IF4101',
							label:'IF-41-01'
						},
						{
							value:'IF4102',
							label:'IF-41-02'
						},
						{
							value:'IF4103',
							label:'IF-41-03'
						},
					]
				},
				{
					title:'Kelas Bisnis',
					list:[
						{
							value:'BS4101',
							label:'BS-41-01'
						},
						{
							value:'BS4102',
							label:'BS-41-02'
						},
						{
							value:'BS4103',
							label:'BS-41-03'
						},
					]
				},
			],
			minSelected:2,
			maxSelected:5,
			warningValidationList:{
				minSelected:2,
				maxSelected:5,
				isRequired:true,
			},
			errorValidationList:{}
        },
		{
            field:'search',
			label:'Search',
			type:'inputTextSearch',
            placeholder:'Search something...',
			isShowIcon:true,
            isDisabled:false,
			warningValidationList:{},
			errorValidationList:{}
        }
	]

	const fieldSchemas = [
        {
            field:'name',
            label:'Name',
			type:'inputText',
            placeholder:'Enter Your Name',
            isDisabled:false,
			warningValidationList:{
				isRequired:true,
			},
			errorValidationList:{}
        },
		{
            field:'nim',
            label:'NIM',
			type:'inputTextNumberic',
            placeholder:'Enter Your Student Number',
            isDisabled:false,
			minLength:0,
			maxLength:10,
			warningValidationList:{
				isRequired:true,
				minLength:10,
				maxLength:10
				
			},
			errorValidationList:{}
        },
		{
            field:'selectClass',
			label:'Class',
			type:'inputSelection',
            placeholder:'--- Option ---',
			listSelection:[
				{
					title:'Kelas Informatika',
					list:[
						{
							value:'IF4101',
							label:'IF-41-01'
						},
						{
							value:'IF4102',
							label:'IF-41-02'
						},
						{
							value:'IF4103',
							label:'IF-41-03'
						},
					]
				},
				{
					title:'Kelas Bisnis',
					list:[
						{
							value:'BS4101',
							label:'BS-41-01'
						},
						{
							value:'BS4102',
							label:'BS-41-02'
						},
						{
							value:'BS4103',
							label:'BS-41-03'
						},
					]
				},
			],
			isSearchInput:true,
            isDisabled:false,
			warningValidationList:{
				isRequired:true,
			},
			errorValidationList:{}
        },
		{
            field:'email',
			label:'Email',
			type:'inputTextEmail',
            placeholder:'Enter Your Email Address',
			isShowIcon:true,
            isDisabled:false,
			warningValidationList:{
				isRequired:true,
				isEmail:true
			},
			errorValidationList:{
				isUnique:true
			}
        },
		{
            field:'password',
			label:'Password',
			type:'inputTextPassword',
            placeholder:'Enter Your Password',
			isShowIcon:true,
            isDisabled:false,
			warningValidationList:{
				isRequired:true
			}
        },
		{
            field:'phoneNumber',
			label:'Phone Number',
			type:'inputPhoneNumber',
            isDisabled:false,
			optionSelected:'ID',
			fixedOption:false,
			warningValidationList:{
				isRequired:true,
				validPhoneNum:true
			},
			errorValidationList:{}
        },
		{
            field:'comment',
			label:'Comment',
			type:'inputTextArea',
            placeholder:'Type Your Comment...',
            isDisabled:false,
			warningValidationList:{
				isRequired:true,
			},
			errorValidationList:{}
        },
		{
            field:'count',
            label:'Count',
			type:'inputNumber',
            placeholder:'Enter Count',
            isDisabled:false,
			isShowCounter: true,
			step:5,
			min:1,
			max:100,
			warningValidationList:{
				min:1,
				max:100,
				isRequired:true,
			},
			errorValidationList:{}
        },
		
    ]

	useEffect(()=>{
		console.log(fieldList)
	},[fieldList])

	return (
		<WindowContextProvider>
			<div className={(fieldList['darkMode']?('dark'):(''))+' text-sm relative'}>
				<div className="bg-base-background dark:bg-baseDark-background h-[2000px] min-h-screen">
					<form>
						<div className='px-4 pb-20 w-full max-w-md pt-4'>
							{
								fieldSchemasSearch.map((schema)=>(
									<FormInput
										schema={schema}
										fieldList={fieldList}
										setFieldList={setFieldList}

										fieldInfo={fieldInfo}
										setFieldInfo={setFieldInfo}
										key={schema.field}
									/>
								))
							}
						</div>
					</form>
					<form>
						<div className='px-4 w-full max-w-md pb-4'>
							{
								fieldSchemas.map((schema)=>(
									<FormInput
										schema={schema}
										fieldList={fieldList}
										setFieldList={setFieldList}

										fieldInfo={fieldInfo}
										setFieldInfo={setFieldInfo}
										key={schema.field}
									/>
								))
							}
						</div>
					</form>
				</div>
			</div>
		</WindowContextProvider>
		
	);
}

export default App;
