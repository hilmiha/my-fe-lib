import { RiAddLine } from "react-icons/ri"
import ButtonSquare from "../../atoms/button/ButtonSquare"

const Table = () =>{
    const data = [
        {
            id:'1111',
            song:'The Sliding Mr. Bones (Next Stop, Pottersville)',
            artist:'Malcolm Lockyer',
            year:'1961'
        },
        {
            id:'1222',
            song:'Witchy Woman',
            artist:'The Eagles',
            year:'1972'
        },
        {
            id:'1333',
            song:'Shining Star',
            artist:'Earth, Wind, and Fire',
            year:'1975'
        },
        
    ]
    return(
        <div className="overflow-auto border border-grays-300 dark:border-grays-700 rounded-xl">
            <table className="table-auto w-full border-collapse">
                <thead className="bg-base-background-mid dark:bg-baseDark-background-mid">
                    <tr>
                        <th className="text-start p-4 truncate">Song</th>
                        <th className="text-start p-4 truncate">Artis</th>
                        <th className="text-start p-4 truncate">Year</th>
                        <th className="text-end p-4 truncate"></th>
                    </tr>
                </thead>
                <tbody className="bg-base-background-top dark:bg-baseDark-background-top">
                    {
                        data.map((item)=>{
                            return(
                                <tr key={item.id} className="border border-x-0 border-b-0 border-grays-300 dark:border-grays-700">
                                    <td className="px-4 py-2 truncate">{item.song}</td>
                                    <td className="px-4 py-2 truncate">{item.artist}</td>
                                    <td className="px-4 py-2 truncate">{item.year}</td>
                                    <td className="px-4 py-2 truncate space-x-2 w-[300px] text-end">
                                        <ButtonSquare
                                            schema={
                                                {
                                                    theme:'transparent',
                                                    isBordered:true,
                                                    icon:<RiAddLine/>
                                                }
                                            }
                                            onClickAction={()=>{console.log(item.id)}}
                                        />
                                        <ButtonSquare
                                            schema={
                                                {
                                                    theme:'transparent',
                                                    isBordered:true,
                                                    icon:<RiAddLine/>
                                                }
                                            }
                                            onClickAction={()=>{console.log(item.id)}}
                                        />
                                        <ButtonSquare
                                            schema={
                                                {
                                                    theme:'transparent',
                                                    isBordered:true,
                                                    icon:<RiAddLine/>
                                                }
                                            }
                                            onClickAction={()=>{console.log(item.id)}}
                                        />
                                    </td>
                                </tr>
                            )
                        })
                    }
                    {/* <tr className="border border-x-0 border-b-0 border-grays-300 dark:border-grays-700">
                        <td className="p-4 truncate">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                        <td className="p-4 truncate">Malcolm Lockyer</td>
                        <td className="p-4 truncate">1961</td>
                    </tr>
                    <tr className="border border-x-0 border-b-0 border-grays-300 dark:border-grays-700">
                        <td className="p-4 truncate">Witchy Woman</td>
                        <td className="p-4 truncate">The Eagles</td>
                        <td className="p-4 truncate">1972</td>
                    </tr>
                    <tr className="border border-x-0 border-b-0 border-grays-300 dark:border-grays-700">
                        <td className="p-4 truncate">Shining Star</td>
                        <td className="p-4 truncate">Earth, Wind, and Fire</td>
                        <td className="p-4 truncate">1975</td>
                    </tr>
                    <tr className="border border-x-0 border-b-0 border-grays-300 dark:border-grays-700">
                        <td className="p-4 truncate">Shining Star</td>
                        <td className="p-4 truncate">Earth, Wind, and Fire</td>
                        <td className="p-4 truncate">1975</td>
                    </tr>
                    <tr className="border border-x-0 border-b-0 border-grays-300 dark:border-grays-700">
                        <td className="p-4 truncate">Shining Star</td>
                        <td className="p-4 truncate">Earth, Wind, and Fire</td>
                        <td className="p-4 truncate">1975</td>
                    </tr>
                    <tr className="border border-x-0 border-b-0 border-grays-300 dark:border-grays-700">
                        <td className="p-4 truncate">Shining Star</td>
                        <td className="p-4 truncate">Earth, Wind, and Fire</td>
                        <td className="p-4 truncate">1975</td>
                    </tr>
                    <tr className="border border-x-0 border-b-0 border-grays-300 dark:border-grays-700">
                        <td className="p-4 truncate">Shining Star</td>
                        <td className="p-4 truncate">Earth, Wind, and Fire</td>
                        <td className="p-4 truncate">1975</td>
                    </tr>
                    <tr className="border border-x-0 border-b-0 border-grays-300 dark:border-grays-700">
                        <td className="p-4 truncate">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                        <td className="p-4 truncate">Malcolm Lockyer</td>
                        <td className="p-4 truncate">1961</td>
                    </tr>
                    <tr className="border border-x-0 border-b-0 border-grays-300 dark:border-grays-700">
                        <td className="p-4 truncate">Witchy Woman</td>
                        <td className="p-4 truncate">The Eagles</td>
                        <td className="p-4 truncate">1972</td>
                    </tr>
                    <tr className="border border-x-0 border-b-0 border-grays-300 dark:border-grays-700">
                        <td className="p-4 truncate">Shining Star</td>
                        <td className="p-4 truncate">Earth, Wind, and Fire</td>
                        <td className="p-4 truncate">1975</td>
                    </tr>
                    <tr className="border border-x-0 border-b-0 border-grays-300 dark:border-grays-700">
                        <td className="p-4 truncate">Shining Star</td>
                        <td className="p-4 truncate">Earth, Wind, and Fire</td>
                        <td className="p-4 truncate">1975</td>
                    </tr>
                    <tr className="border border-x-0 border-b-0 border-grays-300 dark:border-grays-700">
                        <td className="p-4 truncate">Shining Star</td>
                        <td className="p-4 truncate">Earth, Wind, and Fire</td>
                        <td className="p-4 truncate">1975</td>
                    </tr>
                    <tr className="border border-x-0 border-b-0 border-grays-300 dark:border-grays-700">
                        <td className="p-4 truncate">Shining Star</td>
                        <td className="p-4 truncate">Earth, Wind, and Fire</td>
                        <td className="p-4 truncate">1975</td>
                    </tr>
                    <tr className="border border-x-0 border-b-0 border-grays-300 dark:border-grays-700">
                        <td className="p-4 truncate">Shining Star</td>
                        <td className="p-4 truncate">Earth, Wind, and Fire</td>
                        <td className="p-4 truncate">1975</td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    )
}

export default Table