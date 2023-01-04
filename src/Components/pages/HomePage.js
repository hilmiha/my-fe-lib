import SidebarNavigation from "../UI/organisms/sidebar-navigation/SidebarNavigation"
import SidebarTemplate from "../templates/SidebarTemplate"
// import StackedTemplate from "../templates/StackedTemplate"
// import TopbarNavigation from "../UI/organisms/topbar-navigation/TopbarNavigation"
import Table from "../UI/molecules/table/Table"
import FormInput from "../UI/molecules/form-input/FormInput"
import { useContext, useState } from "react"
import { WindowContext } from "../../Contexts/WindowContext"
import Button from "../UI/atoms/button/Button"
import { RiAddLine } from "react-icons/ri"

const HomePage = () =>{
    const {windowSize} = useContext(WindowContext)
    const [fieldList, setFieldList] = useState({
		search:'',
        genre:[],
        status:'',
    })
    const [fieldInfo, setFieldInfo] = useState({
		error:{},
		warning:{},
		success:{}
	})
    const fieldSchemaFilter = [
        {
            field:'search',
			type:'inputTextSearch',
            label:'Title',
            placeholder:'Search something...',
			isShowIcon:true,
            isDisabled:false,
            isShowError:true,
			warningValidationList:{},
			errorValidationList:{}
        },
        {
            field:'genre',
			type:'inputMultiSelection',
			placeholder:'--- Option ---',
			label:'Genre',
			isSearchInput:true,
            isDisabled:false,
			listSelection:[
				{
					list:[
						{
							value:'pop',
							label:'Pop'
						},
						{
							value:'rock',
							label:'Rock'
						},
						{
							value:'jpop',
							label:'J-Pop'
						},
                        {
							value:'kpop',
							label:'K-Pop'
						},
						{
							value:'instrumental',
							label:'Instrumental'
						},
                        {
							value:'country',
							label:'Country'
						},
                        {
							value:'techno',
							label:'Techno'
						},
					]
				},
			],
			warningValidationList:{
                isRequired:true
            },
			errorValidationList:{}
        },
        {
            field:'status',
			label:'Staus',
			type:'inputSelection',
            placeholder:'--- Option ---',
			listSelection:[
				{
					list:[
						{
							value:'disabled',
							label:'Disabled'
						},
						{
							value:'active',
							label:'Active'
						}
					]
				}
			],
			isSearchInput:false,
            isDisabled:false,
			warningValidationList:{},
			errorValidationList:{}
        },
    ]
    const fieldSchemasSearch = [
		{
            field:'search',
			type:'inputTextSearch',
            placeholder:'Search something...',
			isShowIcon:true,
            isDisabled:false,
			warningValidationList:{},
			errorValidationList:{}
        },
	]

    return(
        <SidebarTemplate
            sideLeftContent={
                <SidebarNavigation/>
            }
            mainContent={
                <>
                    <div className={'bg-base-background-top dark:bg-baseDark-background-top h-[55px] flex border border-grays-300 dark:border-grays-700 border-x-0 border-t-0 px-8 '+(windowSize<3?("sticky top-[55px] mb-8 z-10 flex-col justify-center"):("sticky top-0 mb-8 z-10 items-center"))}>
                        <span className="text-base-black dark:text-base-white font-bold">Dashboard</span>
                    </div>
                    
                    
                    <div className="px-8">
                        <form>
                            <div className={
                                (windowSize<3?("flex flex-col mb-4"):("space-x-4 flex mb-4"))
                            }>
                                {
                                    fieldSchemaFilter.map((schema)=>(
                                        <div className={(windowSize<3?('w-full'):("w-[240px]"))}>
                                            <FormInput
                                                schema={schema}
                                                fieldList={fieldList}
                                                setFieldList={setFieldList}

                                                fieldInfo={fieldInfo}
                                                setFieldInfo={setFieldInfo}
                                                key={schema.field}
                                            />
                                        </div>
                                    ))
                                }
                                <div className={(windowSize<3?('w-full'):("mt-7 w-[100px]"))}>
                                    <Button 
                                        schema={
                                            {
                                                theme:'secondary',
                                                widht:'w-full',
                                                label:'Filter'
                                            }
                                        }
                                    />
                                </div>
                            </div>
                        </form>
                        <Table/>
                    </div>
                </>
                
            }
        />
        // <StackedTemplate
        //     sideTopContent={
        //         <TopbarNavigation/>
        //     }
        //     mainContent={
        //         <div className="text-base-black dark:text-base-white text-3xl">
        //             Dashboard
        //         </div>
        //     }
        // />
    )
}

export default HomePage