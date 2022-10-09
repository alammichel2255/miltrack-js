import React, { useStat, useContext } from 'react';

import styled from 'styled-components';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as GrIcons from 'react-icons/gr';
import { AppContext } from '../AppContext';
//import Profile, { staticSkillsTestArrayOfObjects as staticSkills, specialSkillsTestArrayOfObjects as specialSkills, userObject } from './profile';
//imported for use of dummy data



export const Medical = (props) => {

    let {
        loggedUser,
        setLoggedUser,
        allUsers,
        setAllUsers,
        loggedUserOrg,
        setLoggedUserOrg,
        loggedUserToggle,
        setLoggedUserToggle,
        loggedUserSummary,
        setLoggedUserSummary,
        loggedUserServiceMembers,
        setLoggedUserServiceMembers,
        loggedUserServiceMemberSummaries,
        setLoggedUserServiceMemberSummaries,
        loggedUserServiceMemberPromiseChainComplete,
        setLoggedUserServiceMemberPromiseChainComplete,
        updateFieldsToggle,
        setUpdateFieldsToggle
    }

        = useContext(AppContext);

    const colorHelper = (amber, red,) => {

        if (red) {
            return 'bg-red-400 border border-2 border-black border-double py-2 px-8 rounded-md shadow-lg break-all';

        } else if (amber) {
            return 'bg-amber-400 border border-2 border-black border-double py-2 px-8 rounded-md shadow-lg break-all';

        } else {
            return 'bg-green-400 border border-2 border-black border-double py-2 px-8 rounded-md shadow-lg break-all';
        }
    }

    const currentLabelHelper = (currentLabel) => {

        if (currentLabel == "Annual Training") {
            return "Annual"
        } else {
            return currentLabel;
        }

    }

    const currentLabelHelper2 = (currentLabel) => {

        if (currentLabel === "Annual Training") {
            return "Training"
        } else {
            return;
        }

    }

    const dateHelper = (uiDate) => {

        const monthHelper = (month) => {

            switch (month.toLowerCase()) {

                case 'jan':
                    return '01';
                    break;
                
                case 'feb':
                    return '02';
                    break;

                case 'mar':
                    return '03';
                    break;
                    
                case 'apr':
                    return '04';
                    break;
                
                case 'may':
                    return '05';
                    break;
        
                case 'jun':
                    return '06';
                    break;
                
                case 'jul':
                    return '07';
                    break;

                case 'aug':
                    return '08';
                    break;
        
                case 'sep':
                    return '09';
                    break;

                case 'oct':
                    return '10';
                    break;

                case 'nov':
                    return '11';
                    break;

                case 'dec':
                    return '12';
                    break;
                default:
                    break;

            }

        }

        let dateArray = uiDate.split(" ");

        console.log("dateArray: ", dateArray);
        
        let correctedDateFormat = `${dateArray[3]}-${monthHelper(dateArray[1])}-${dateArray[2]}`;

        console.log("correctedDateFormat: ", correctedDateFormat);
        return correctedDateFormat;

    }

    return (
        <ul key="0" className="w-10/12 h-8/12 width: 'vw' list-none flex flex-row flex-wrap gap-8 border border-2 border-gray border-double mx-auto my-8 p-4 bg-[#A3BD8A] rounded-lg shadow-2xl ">
            <div>
                <h2 className="text-3xl font-bold border-r-2 py-8 pr-8">Medical Status</h2>
            </div>
            {props.elements.map((element, index) => {

                let currentLabel = "";
                let currentLabelStatus = "";
                let amber = false;
                let red = false;

                let date;
                let msDate;
                let uiDate;

                Object.keys(element).map((key, key_index) => {

                    if (key === "id") {
                        return;
                    }

                    // console.log(key_index)
                    let currentValue = "";
                    Object.values(element).map((value, value_index) => {
                        if (value_index === key_index) {
                            currentValue = value;
                        }
                    })
                    if (index <= 10) {
                        console.log(key);
                        console.log(currentValue);

                        if (key === "current_status") {
                            currentLabel = "Status";

                            if (currentValue === "TDY") {
                                currentLabelStatus = "TDY";
                                red = true;
                            } else if (currentValue === "Leave") {
                                amber = true;
                                currentLabelStatus = "Leave"
                            } else {
                                currentLabelStatus = "PDY"
                            }

                        }
                        // console.log(key_index);
                        // console.log(currentValue);

                        // console.log(`${currentValue.valueOf()} : ${new Date('2020-01-01').toString().valueOf()}`)
                        if (key === "pha_date") {

                            currentLabel = "PHA";

                            if (new Date(currentValue).valueOf() > Date.now()) {
                                date = new Date(currentValue).valueOf();
                                msDate = new Date(parseInt(date, 10));
                                uiDate = msDate.toDateString();
                                currentLabelStatus = 'Due Date\n' + uiDate;

                                if (new Date(currentValue).valueOf() - Date.now() <= 2592000000) {
                                    date = new Date(currentValue).valueOf();
                                    msDate = new Date(parseInt(date, 10));
                                    uiDate = msDate.toDateString();
                                    amber = true;
                                    currentLabelStatus = 'Due Date\n' + uiDate;

                                }

                            } else if (new Date(currentValue).valueOf() < Date.now()) {
                                date = new Date(currentValue).valueOf();
                                msDate = new Date(parseInt(date, 10));
                                uiDate = msDate.toDateString();
                                red = true;
                                currentLabelStatus = 'Due Date\n' + uiDate;
                            }
                        }

                        if (key === "dental_date") {

                            currentLabel = "Dental";

                            if (new Date(currentValue).valueOf() > Date.now()) {
                                date = new Date(currentValue).valueOf();
                                msDate = new Date(parseInt(date, 10));
                                uiDate = msDate.toDateString();
                                currentLabelStatus = 'Due Date\n' + uiDate;

                                if (new Date(currentValue).valueOf() - Date.now() <= 2592000000) {
                                    date = new Date(currentValue).valueOf();
                                    msDate = new Date(parseInt(date, 10));
                                    uiDate = msDate.toDateString();
                                    amber = true;
                                    currentLabelStatus = 'Due Date\n' + uiDate;

                                }

                            } else if (new Date(currentValue).valueOf() < Date.now()) {
                                date = new Date(currentValue).valueOf();
                                msDate = new Date(parseInt(date, 10));
                                uiDate = msDate.toDateString();
                                red = true;
                                currentLabelStatus = 'Due Date\n' + uiDate;
                            }
                        }

                        if (key === "hearing_date") {

                            currentLabel = "Hearing";

                            if (new Date(currentValue).valueOf() > Date.now()) {
                                date = new Date(currentValue).valueOf();
                                msDate = new Date(parseInt(date, 10));
                                uiDate = msDate.toDateString();
                                currentLabelStatus = 'Due Date\n' + uiDate;

                                if (new Date(currentValue).valueOf() - Date.now() <= 2592000000) {
                                    date = new Date(currentValue).valueOf();
                                    msDate = new Date(parseInt(date, 10));
                                    uiDate = msDate.toDateString();
                                    amber = true;
                                    currentLabelStatus = 'Due Date\n' + uiDate;

                                }

                            } else if (new Date(currentValue).valueOf() < Date.now()) {
                                date = new Date(currentValue).valueOf();
                                msDate = new Date(parseInt(date, 10));
                                uiDate = msDate.toDateString();
                                red = true;
                                currentLabelStatus = 'Due Date\n' + uiDate;

                            }
                        }

                        if (key === "vision_date") {

                            currentLabel = "Vision";

                            if (new Date(currentValue).valueOf() > Date.now()) {
                                date = new Date(currentValue).valueOf();
                                msDate = new Date(parseInt(date, 10));
                                uiDate = msDate.toDateString();
                                currentLabelStatus = 'Due Date\n' + uiDate;

                                if (new Date(currentValue).valueOf() - Date.now() <= 2592000000) {
                                    date = new Date(currentValue).valueOf();
                                    msDate = new Date(parseInt(date, 10));
                                    uiDate = msDate.toDateString();
                                    amber = true;
                                    currentLabelStatus = 'Due Date\n' + uiDate;

                                } else {

                                }

                            } else if (new Date(currentValue).valueOf() < Date.now()) {
                                date = new Date(currentValue).valueOf();
                                msDate = new Date(parseInt(date, 10));
                                uiDate = msDate.toDateString();
                                red = true;
                                currentLabelStatus = 'Due Date\n' + uiDate;
                            }
                        }

                        if (key === "hiv_date") {

                            currentLabel = "HIV";

                            if (new Date(currentValue).valueOf() > Date.now()) {
                                date = new Date(currentValue).valueOf();
                                msDate = new Date(parseInt(date, 10));
                                uiDate = msDate.toDateString();
                                currentLabelStatus = 'Due Date\n' + uiDate;

                                if (new Date(currentValue).valueOf() - Date.now() <= 2592000000) {
                                    date = new Date(currentValue).valueOf();
                                    msDate = new Date(parseInt(date, 10));
                                    uiDate = msDate.toDateString();
                                    amber = true;
                                    currentLabelStatus = 'Due Date\n' + uiDate;

                                } else {

                                }

                            } else if (new Date(currentValue).valueOf() < Date.now()) {
                                date = new Date(currentValue).valueOf();
                                msDate = new Date(parseInt(date, 10));
                                uiDate = msDate.toDateString();
                                red = true;
                                currentLabelStatus = 'Due Date\n' + uiDate;
                            }

                        }
                        // console.log(statusColor);

                    }

                })

                if (updateFieldsToggle % 2 === 0) {
                    return ( 
                        <li
                        key={index}
                        className={colorHelper(amber, red)}>
                        <strong className="text-center">
                            {/* If label isn't annual training, put colon after label */}
                            {currentLabelHelper(currentLabel)}{currentLabelHelper2(currentLabel) === undefined ? ":" : ""}

                        </strong>
                        <strong className="text-center">
                            {/* If label isn't annual training, do not add colon on new line */}
                            {currentLabelHelper2(currentLabel)}{currentLabelHelper2(currentLabel) !== undefined ? ":" : ""}
                        </strong>

                        <p className="text-center">{currentLabelStatus}</p>
                        </li> 
                    )
                } else {
                    return ( 
                        <li
                        key={index}
                        className="bg-slate-400 border border-2 border-black border-double py-2 px-8 rounded-md shadow-lg break-all">
                        <strong className="text-center">
                            {/* If label isn't annual training, put colon after label */}
                            {"New " + currentLabelHelper(currentLabel) + " Date"}{currentLabelHelper2(currentLabel) === undefined ? ":" : ""}

                        </strong>
                        <strong className="text-center">
                            {/* If label isn't annual training, do not add colon on new line */}
                            {currentLabelHelper2(currentLabel)}{currentLabelHelper2(currentLabel) !== undefined ? ":" : ""}
                        </strong>
                        <br/>
                        <br/>
                        { /* dateHelper(uiDate) */ }
                        <input type="date" value="2018-07-07" onChange={(event) => {currentLabelStatus = event.target.value; console.log(currentLabelStatus)}}/>
                        </li> 
                    )
                }
                

            })}
        </ul>
    )
};


// ━◦○◦━◦○◦━◦○◦━◦○◦━◦○◦━◦○◦━━◦○◦━◦○◦━◦○◦━◦○◦━◦○◦━◦○◦━━◦○◦━◦○◦━◦○◦━◦○◦━◦○◦━◦○◦━━◦○◦━◦○◦━◦○◦━◦○◦━◦○◦━◦○◦━━◦○◦━◦○◦━◦○◦━◦○◦━◦○◦━◦○◦━━◦○◦━◦○◦━◦○◦━◦○◦━◦○◦━◦○◦━━◦○◦━◦○◦━◦○◦━◦○◦━◦○◦━◦○◦━━◦○◦━◦○◦━◦○◦━◦○◦━◦○◦━◦○◦━

export const AnnualTraining = (props) => {

    let {
        loggedUser,
        setLoggedUser,
        allUsers,
        setAllUsers,
        loggedUserOrg,
        setLoggedUserOrg,
        loggedUserToggle,
        setLoggedUserToggle,
        loggedUserSummary,
        setLoggedUserSummary,
        loggedUserServiceMembers,
        setLoggedUserServiceMembers,
        loggedUserServiceMemberSummaries,
        setLoggedUserServiceMemberSummaries,
        loggedUserPromiseChainComplete,
        setLoggedUserServiceMemberPromiseChainComplete
    }

        = useContext(AppContext);

    const colorHelper = (amber, red,) => {

        if (red) {
            return 'bg-red-400 border border-2 border-black border-double py-2 px-8 rounded-md shadow-lg break-all';

        } else if (amber) {
            return 'bg-amber-400 border border-2 border-black border-double py-2 px-8 rounded-md shadow-lg break-all';

        } else {
            return 'bg-green-400 border border-2 border-black border-double py-2 px-8 rounded-md shadow-lg break-all';
        }
    }

    return (
        <ul key="1" className="w-10/12 h-8/12 width: 'vw' list-none flex flex-row flex-wrap gap-8 border border-2 border-gray border-double mx-auto my-8 p-4 bg-[#A3BD8A] rounded-lg shadow-2xl ">
            <div>
                <h2 className="text-3xl font-bold border-r-2 py-8 pr-8">Annual Training</h2>
            </div>
            {
                loggedUserSummary.map((obj, index) => {
                    console.log("loggedUserSummary: ", loggedUserSummary)
                    console.log("obj: ", obj)
                    if (obj.training_name) {
                        console.log("test")
                        //props.elements.map((skill, index) => {

                        let currentLabel = "";
                        let currentLabelStatus = "";
                        let amber = false;
                        let red = false;



                        currentLabel = obj.training_name;

                        // { id: 1, skill_name: "Foreign Language", refresh_date: "2022-06-06", users_id: 1 }

                        if (new Date(obj.training_date).valueOf() > Date.now()) {

                            let date = new Date(obj.training_date).valueOf();
                            let msDate = new Date(parseInt(date, 10));
                            let uiDate = msDate.toDateString();
                            currentLabelStatus = 'Due Date\n' + uiDate;

                            if (new Date(obj.training_date).valueOf() - Date.now() <= 2592000000) {

                                let date = new Date(obj.training_date).valueOf();
                                let msDate = new Date(parseInt(date, 10));
                                let uiDate = msDate.toDateString();
                                amber = true;
                                currentLabelStatus = 'Due Date\n' + uiDate;

                            }

                        } else if (new Date(obj.training_date).valueOf() < Date.now()) {

                            let date = new Date(obj.training_date).valueOf();
                            let msDate = new Date(parseInt(date, 10));
                            let uiDate = msDate.toDateString();
                            red = true;
                            currentLabelStatus = 'Due Date\n' + uiDate;
                        }
                        
                        if (currentLabel === "") {
                            return <></>
                            
                        } else {
                            
                            
                        if (loggedUser !== []) {
                            if (loggedUserPromiseChainComplete === true && loggedUserSummary[0] !== undefined) { 

                                return (

                                    <li

                                        key={index}
                                        className={colorHelper(amber, red)}>

                                        <strong className="text-center">
                                            {currentLabel}
                                        </strong>

                                        <p className="text-center">{currentLabelStatus}</p>

                                    </li>

                                );
                            } else {

                                <li

                                key={index}
                                className={colorHelper(amber, red)}>

                                <strong className="text-center">
                                    Loading...
                                </strong>

                                <p className="text-center">Loading...</p>

                                </li>

                            }
                        }

                        }
                    } else {
                        return <></>;

                    }
                })
            }
        </ul>
    )
};



export const SpecialTraining = (props) => {

    let {
        loggedUser,
        setLoggedUser,
        allUsers,
        setAllUsers,
        loggedUserOrg,
        setLoggedUserOrg,
        loggedUserToggle,
        setLoggedUserToggle,
        loggedUserSummary,
        setLoggedUserSummary,
        loggedUserServiceMembers,
        setLoggedUserServiceMembers,
        loggedUserServiceMemberSummaries,
        setLoggedUserServiceMemberSummaries,
        loggedUserPromiseChainComplete,
        setLoggedUserServiceMemberPromiseChainComplete
    }

        = useContext(AppContext);

    const colorHelper = (amber, red,) => {

        if (red) {
            return 'bg-red-400 border border-2 border-black border-double py-2 px-8 rounded-md shadow-lg break-all';

        } else if (amber) {
            return 'bg-amber-400 border border-2 border-black border-double py-2 px-8 rounded-md shadow-lg break-all';

        } else {
            return 'bg-green-400 border border-2 border-black border-double py-2 px-8 rounded-md shadow-lg break-all';
        }
    }

    return (
        <ul key="1" className="w-10/12 h-8/12 width: 'vw' list-none flex flex-row flex-wrap gap-8 border border-2 border-gray border-double mx-auto my-8 p-4 bg-[#A3BD8A] rounded-lg shadow-2xl ">
            <div>
                <h2 className="text-3xl font-bold border-r-2 py-8 pr-8">Special Training</h2>
            </div>
            {
                loggedUserSummary.map((obj, index) => {
                    console.log("loggedUserSummary: ", loggedUserSummary)
                    console.log("obj: ", obj)
                    if (obj.skill_refresh_date) {
                        console.log("test")
                        //props.elements.map((skill, index) => {

                        let currentLabel = "";
                        let currentLabelStatus = "";
                        let amber = false;
                        let red = false;



                        currentLabel = obj.skill_name;

                        // { id: 1, skill_name: "Foreign Language", refresh_date: "2022-06-06", users_id: 1 }

                        if (new Date(obj.skill_refresh_date).valueOf() > Date.now()) {

                            let date = new Date(obj.skill_refresh_date).valueOf();
                            let msDate = new Date(parseInt(date, 10));
                            let uiDate = msDate.toDateString();
                            currentLabelStatus = 'Due Date\n' + uiDate;

                            if (new Date(obj.skill_refresh_date).valueOf() - Date.now() <= 2592000000) {

                                let date = new Date(obj.skill_refresh_date).valueOf();
                                let msDate = new Date(parseInt(date, 10));
                                let uiDate = msDate.toDateString();
                                amber = true;
                                currentLabelStatus = 'Due Date\n' + uiDate;

                            }

                        } else if (new Date(obj.skill_refresh_date).valueOf() < Date.now()) {

                            let date = new Date(obj.skill_refresh_date).valueOf();
                            let msDate = new Date(parseInt(date, 10));
                            let uiDate = msDate.toDateString();
                            red = true;
                            currentLabelStatus = 'Due Date\n' + uiDate;
                        }
                        
                        if (currentLabel === "") {
                            return <></>
                            
                        } else {
                            
                            
                        if (loggedUser !== []) {
                            if (loggedUserPromiseChainComplete === true && loggedUserSummary[0] !== undefined) { 

                                return (

                                    <li

                                        key={index}
                                        className={colorHelper(amber, red)}>

                                        <strong className="text-center">
                                            {currentLabel}
                                        </strong>

                                        <p className="text-center">{currentLabelStatus}</p>

                                    </li>

                                );
                            } else {

                                <li

                                key={index}
                                className={colorHelper(amber, red)}>

                                <strong className="text-center">
                                    Loading...
                                </strong>

                                <p className="text-center">Loading...</p>

                                </li>

                            }
                        }

                        }
                    } else {
                        return <></>;

                    }
                })
            }
        </ul>
    )
};


export const StaticTraining = (props) => {

    let {
        loggedUser,
        setLoggedUser,
        allUsers,
        setAllUsers,
        loggedUserOrg,
        setLoggedUserOrg,
        loggedUserToggle,
        setLoggedUserToggle,
        loggedUserSummary,
        setLoggedUserSummary,
        loggedUserServiceMembers,
        setLoggedUserServiceMembers,
        loggedUserServiceMemberSummaries,
        setLoggedUserServiceMemberSummaries,
        loggedUserServiceMemberPromiseChainComplete,
        setLoggedUserServiceMemberPromiseChainComplete
    }

        = useContext(AppContext);
    // const staticItems = () => {

    //}
    // const staticItems = (
    //     <ul>
    //         {loggedUserSummary.map((obj) => {
    //                 if (obj.skill_name && !obj.skill_refresh_date) {
    //                     <li key={skill.id}>
    //                         {skill.name}--
    //                         {skill.skill_date}
    //                     </li>
    //         )}

    //         </ul>

    // );

    /*
    STATIC
           "id": 1,
           "skill_name": "Knowledge Management Professional",
           "users_id": 1
   SPECIAL
           {
   "id": 1,
   "skill_name": "SEC+",
   "skill_refresh_date": "2025-05-22",
   "users_id": 1
 },
       */

    /* 
        {skill_name: 'SEC+', skill_refresh_date:'2025-05-22', users_id:1 },
    */
    return (
        <ul className="w-10/12 h-8/12 list-none flex gap-8 border border-2 border-gray border-double mx-auto my-8 p-4 bg-[#A3BD8A] rounded-lg shadow-2xl ">
            <div>
                <h2 className="text-3xl font-bold border-r-2 py-0 pr-8">Static Training</h2>
                <h5 className="font-bold border-r-2 py-0 pr-8">Relevent Training with no </h5>
                <h5 className="font-bold border-r-2 py-0 pr-8">recertification required</h5>
            </div>
            <ul id='static'>
                <ul>

                    {loggedUserSummary.map((obj, index) => {
                        console.log("loggedUserSummary: ", loggedUserSummary)
                        console.log("obj: ", obj)
                        if (obj.skill_name && !obj.skill_refresh_date) {
                            return (
                                <li key={index}>
                                    {obj.skill_name}--
                                    {obj.skill_date}
                                </li>
                            )
                        }
                    })}

                </ul>
            </ul>
        </ul>
    )

}