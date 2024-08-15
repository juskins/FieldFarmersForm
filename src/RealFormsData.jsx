import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const RealFormsData = () => {
   const [formData, setFormData] = useState({
      farmerFirstName: "",
      lastName: "",
      gender: "",
      age:'',
      farmerID: "",
      gps: "",
      dependents: '',
      county: '',
      constituency: '',
      ward: '',
      phoneOwnership: "",
      phoneType: "",
      insightsPreference: "",
      email: '',
      pryPhoneNum:'',
      secPhoneNum:'',
      farmOwnership: '',
      rentPeriod:'',
      farmCoordinate: "",
      farmSize: "",
      isIntercropped: "",
      primaryCrop: "",
      secondaryCrop: "",
      plantingDate: "",
      seedType: "",
      seedVariety: "",
      useFertilizer:"",
      fertilizerType: "",
      isIrrigated: "",
      // issues: {
      //   drought: false,
      //   germination: false,
      //   locust: false,
      //   flood: false,
      //   pestsDiseases: false,
      //   cattleEncroachment: false,
      //   weeds: false,
      //   latePlanting: false,
      //   others: "",
      // },
      // lastSeasonCrop: "",
      // harvestAmount: "",
      // lastSeasonSeedType: "",
      // lastSeasonSeedVariety: "",
      // lastSeasonFertilizerType: "",
      // lastSeasonIrrigated: "",
      // lastSeasonIssues: {
      //   drought: false,
      //   germination: false,
      //   locust: false,
      //   flood: false,
      //   pestsDiseases: false,
      //   cattleEncroachment: false,
      //   weeds: false,
      //   latePlanting: false,
      //   others: "",
      // },
    });
  
   const handleChange = (e) => {       
      const { name, value } = e.target;
      let updatedValue = value;
      if (name === "pryPhoneNum" || name === "secPhoneNum") {
         if (!value.startsWith("+254")) {
         updatedValue = "+254-" + value;
         }
      }
     setFormData((prevData) => ({
       ...prevData,
        [name]: updatedValue
     }));
   };
  
   // const handleIssuesChange = (e) => {
   //   const { name, checked, value } = e.target;
   //   setFormData((prevData) => ({
   //     ...prevData,
   //     issues: {
   //       ...prevData.issues,
   //       [name]: name === 'others' ? value : checked
   //     }
   //   }));
   // };
  
   
// Handle change for last season issues checkboxes
//   const handleLastSeasonIssuesChange = (e) => {
//      const { name, checked, value } = e.target;
//      setFormData((prevData) => ({
//        ...prevData,
//        lastSeasonIssues: {
//          ...prevData.lastSeasonIssues,
//          [name]: name === 'others' ? value : checked // Handle 'others' text input differently
//        }
//      }));
//    };
  
   const handleSubmit = (e) => {
     e.preventDefault();
     console.log(formData);
     toast.success('Form submitted successfully',{autoClose:3000})
     setFormData({
      farmerFirstName: "",
      lastName: '',
      gender: "",
      age:"",
      farmerID: "",
      gps: "",
      dependents: '',
      county: '',
      constituency: '',
      ward: '',
      phoneOwnership: "",
      phoneType: "",
      insightsPreference: "",
      email: '',
      pryPhoneNum: '',
      secPhoneNum:'',
      farmOwnership: "",
      rentPeriod:'',
      farmCoordinate: "",
      farmSize: "",
      isIntercropped: "",
      primaryCrop: "",
      secondaryCrop: "",
      plantingDate: "",
      seedType: "",
      seedVariety: "",
      useFertilizer: "",
      fertilizerType: "",
      isIrrigated: "",
      // issues: {
      //    drought: false,
      //    germination: false,
      //    locust: false,
      //    flood: false,
      //    pestsDiseases: false,
      //    cattleEncroachment: false,
      //    weeds: false,
      //    latePlanting: false,
      //    others: "",
      // },
      // lastSeasonCrop: "",
      // harvestAmount: "",
      // lastSeasonSeedType: "",
      // lastSeasonSeedVariety: "",
      // lastSeasonFertilizerType: "",
      // lastSeasonIrrigated: "",
      // lastSeasonIssues: {
      //    drought: false,
      //    germination: false,
      //    locust: false,
      //    flood: false,
      //    pestsDiseases: false,
      //    cattleEncroachment: false,
      //    weeds: false,
      //    latePlanting: false,
      //    others: "",
      // },
    });
   };


  return (
    <div className='flex flex-col justify-center items-center min-h-screen my-16 mb-6'>
        <h1 className='text-3xl font-bold mb-10'> <span className='text-[#F96600]'>Nurus</span> Farmer Form</h1>
        <ToastContainer></ToastContainer>
      <form onSubmit={handleSubmit} className='w-[90%] flex flex-col gap-10'>
         <div>
            <h2>Identifying Information</h2>
            <div className='grid'>  
               <label>
                  <span>First Name:</span>
                  <input
                     type="text"
                     name="farmerFirstName"
                     value={formData.farmerFirstName}
                     onChange={handleChange}
                     required
                  />
               </label>
               
               <label>
                  <span>Last Name:</span>
                  <input
                     type="text"
                     name="lastName"
                     value={formData.lastName}
                     onChange={handleChange}
                     required
                  />
               </label>
                 
               <label>
                  Gender:
                  <select name="gender" value={formData.gender} onChange={handleChange} required>
                     <option value="">Select Gender</option>
                     <option value="male">Male</option>
                     <option value="female">Female</option>
                  </select>
               </label>
                 
               <label>
                  <span>Age:</span>
                  <input
                     type="number"
                     name="age"
                     value={formData.age}
                     onChange={handleChange}
                     required
                  />
               </label>

               <label>
                  National ID:
                  <input
                     type="text"
                     name="farmerID"
                     value={formData.farmerID}
                     onChange={handleChange}
                     required
                  />
               </label>

               <label>
                  GPS of Farmers Home:
                  <input
                     type="text"
                     name="gps"
                     value={formData.gps}
                     onChange={handleChange}
                     required
                  />
               </label>
                 
               <label>
                  Number of Dependents:
                  <input
                     type="number"
                     name="dependents"
                     value={formData.dependents}
                     onChange={handleChange}
                     required
                  />
               </label>

               <label>
                  County:
                  <select
                     name="county"
                     value={formData.county}
                     onChange={handleChange}
                     required
                  >
                     <option value="">Select County</option>
                     <option value="mombasa">Mombasa</option>
                     <option value="kwale">Kwale</option>
                     <option value="Kilifi">Kilifi</option>
                     <option value="Tana River">Tana River</option>
                     <option value="Lamu">Lamu</option>
                  </select>
               </label>
                 
               <label>
                  Constituency:
                  <select
                     name="constituency"
                     value={formData.constituency}
                     onChange={handleChange}
                     required
                  >
                     <option value="">Select Constituency</option>
                     <option value="Changamwe">Changamwe</option>
                     <option value="Jomvu">Jomvu</option>
                     <option value="Kisauni,">Kisauni,</option>
                     <option value="Mvita">Mvita</option>
                     <option value="Likoni">Likoni</option>
                  </select>
               </label>
                 
               <label>
                  Ward:
                  <select
                     name="ward"
                     value={formData.ward}
                     onChange={handleChange}
                     required
                  >
                     <option value="">Select Ward</option>
                     <option value="ward1">Ward 1</option>
                     <option value="ward2">Ward 2</option>
                  </select>
               </label>
            </div>
         </div>

         <div>
            <h2>Accessibility</h2>
            <div className="grid">
               <label>
               Phone Ownership (Y/N):
               <select
                  name="phoneOwnership"
                  value={formData.phoneOwnership}
                  onChange={handleChange}
                  required
               >
                  <option value="">Select an option</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
               </select>
               </label>

               <label>
                  Phone Type:
                  <select
                     name="phoneType"
                     value={formData.phoneType}
                     onChange={handleChange}
                     required
                  >
                     <option value="">Select an option</option>
                     <option value="Feature">Feature</option>
                     <option value="Smart">Smart</option>
                  </select>
               </label>

               <label>
                  Preference to Accessing Insights:
                  <select
                     name="insightsPreference"
                     value={formData.insightsPreference}
                     onChange={handleChange}
                     required
                  >
                     <option value="">Select an option</option>
                     <option value="SMS">SMS</option>
                     <option value="Phone App">Phone App</option>
                  </select>
               </label>
            </div>
         </div>
           
         <div>
            <h2>Contact Details</h2>
            <div className="grid">
               <label>
                  <span>Email Address:</span>
                  <input
                     type="text"
                     name="email"
                     value={formData.email}
                     placeholder='nurusolutions@gmail.com'
                     onChange={handleChange}
                     required
                  />
               </label>

               <label>
                  <span>Primary Phone Number:</span>
                    <div className='phone flex items-center relative'>
                       {/* <span className='absolute left-2'>+254</span> */}
                       <input
                        type="tel"
                        name="pryPhoneNum"
                        value={formData.pryPhoneNum}
                          onChange={handleChange}
                          placeholder='+234'
                        required
                     />
                  </div>
               </label>

               <label>
                    <span>Secondary Phone Number:</span>
                    <div className='phone flex items-center relative'>
                       {/* <span className='absolute left-2'>+254</span> */}
                        <input
                           type="tel"
                           name="secPhoneNum"
                           value={formData.secPhoneNum}
                           onChange={handleChange}
                           placeholder='optional'
                        />
                  </div>
               </label>
               
            </div>
         </div>

         <div>
            <h2>Farm Profile</h2>
            <div className='grid'>
               <label>
                  Farm Ownership:
                  <select
                     name="farmOwnership"
                     value={formData.farmOwnership}
                     onChange={handleChange}
                     required
                  >
                     <option value="">Select Ownership</option>
                     <option value="lease">Lease</option>
                     <option value="rent">Rent</option>
                     <option value="owner">Owner</option>
                  </select>
               </label>

               <label>
                  Rent period for land:
                  <input
                     type="number"
                     name="rentPeriod"
                     value={formData.rentPeriod}
                     onChange={handleChange}
                     placeholder='e.g 15 years'
                  />
               </label>
                 
               <label>
                  Farm Coordinate:
                  <input
                     type="text"
                     name="farmCoordinate"
                     value={formData.farmCoordinate}
                     onChange={handleChange}
                     required
                  />
               </label>

               <label>
                  Farm Size (Acres):
                  <input
                     type="number"
                     name="farmSize"
                     value={formData.farmSize}
                     onChange={handleChange}
                     required
                  />
               </label>
            </div>
         </div>

         <div>
            <h2>Current Season Crop Information</h2>
            <div className="grid">
               <label>
                  Is the farm intercropped?
                  <select
                     name="isIntercropped"
                     value={formData.isIntercropped}
                     onChange={handleChange}
                     required
                  >
                     <option value="">Select an option</option>
                     <option value="Yes">Yes</option>
                     <option value="No">No</option>
                  </select>
               </label>

               <label>
                  Primary Crop:
                  <input
                     type="text"
                     name="primaryCrop"
                     value={formData.primaryCrop}
                     onChange={handleChange}
                     required
                  />
               </label>

               <label>
                  Secondary Crop:
                  <input
                     type="text"
                     name="secondaryCrop"
                     value={formData.secondaryCrop}
                     onChange={handleChange}
                  />
               </label>

               <label>
                  Planting Date:
                  <input
                     type="date"
                     name="plantingDate"
                     value={formData.plantingDate}
                     onChange={handleChange}
                     required
                  />
               </label>
               
               <label>
                  Seed Type:
                  <input
                     type="text"
                     name="seedType"
                     value={formData.seedType}
                     onChange={handleChange}
                     required
                  />
               </label>

               <label>
                  Seed Variety:
                  <input
                     type="text"
                     name="seedVariety"
                     value={formData.seedVariety}
                     onChange={handleChange}
                     required
                  />
               </label>
                 
               <label>
                  Do you use fertilizer?
                  <select
                     name="useFertilizer"
                     value={formData.useFertilizer}
                     onChange={handleChange}
                     required
                  >
                     <option value="">Select an option</option>
                     <option value="Yes">Yes</option>
                     <option value="No">No</option>
                  </select>
               </label>

               <label>
                  Fertilizer Type:
                  <select
                     name="fertilizerType"
                     value={formData.fertilizerType}
                     onChange={handleChange}
                     required
            
                  >
                     <option value="">If Yes, select Type</option>
                     <option value="organic">Organic</option>
                     <option value="inorganic">Inorganic</option>
                  </select>
               </label>

               <label>
                  Is the field Irrigated?
                  <select
                     name="isIrrigated"
                     value={formData.isIrrigated}
                     onChange={handleChange}
                     required
                  >
                     <option value="">Select an option</option>
                     <option value="Yes">Yes</option>
                     <option value="No">No</option>
                  </select>
               </label>
            </div>

            {/* <label className='mt-10'>
               <span className='font-semibold'>Issues reported by farmers during the season plus the date:</span>
               <div className="flex gap-x-10 gap-y-5 flex-wrap ">
                  <label className='flex flex-row items-center'>
                     <span>Drought:</span>
                     <input
                        type="checkbox"
                        name="drought"
                        checked={formData.issues.drought}
                        onChange={handleIssuesChange}
                     />
                  </label>
                  <label className='flex flex-row items-center'>
                     Poor/No Germination:
                     <input
                        type="checkbox"
                        name="germination"
                        checked={formData.issues.germination}
                        onChange={handleIssuesChange}
                     />
                  </label>
                  <label className='flex flex-row items-center'>
                     Locust Infestation:
                     <input
                        type="checkbox"
                        name="locust"
                        checked={formData.issues.locust}
                        onChange={handleIssuesChange}
                     />
                  </label>
                  <label className='flex flex-row items-center'>
                     Flood:
                     <input
                        type="checkbox"
                        name="flood"
                        checked={formData.issues.flood}
                        onChange={handleIssuesChange}
                     />
                  </label>
                  <label className='flex flex-row items-center'>
                     Other Pests and Diseases:
                     <input
                        type="checkbox"
                        name="pestsDiseases"
                        checked={formData.issues.pestsDiseases}
                        onChange={handleIssuesChange}
                     />
                  </label>
                  <label className='flex flex-row items-center'>
                     Animal/Cattle Encroachment:
                     <input
                        type="checkbox"
                        name="cattleEncroachment"
                        checked={formData.issues.cattleEncroachment}
                        onChange={handleIssuesChange}
                     />
                  </label>
                  <label className='flex flex-row items-center'>
                     Weeds:
                     <input
                        type="checkbox"
                        name="weeds"
                        checked={formData.issues.weeds}
                        onChange={handleIssuesChange}
                     />
                  </label>
                  <label className='flex flex-row items-center'>
                     Late Planting:
                     <input
                        type="checkbox"
                        name="latePlanting"
                        checked={formData.issues.latePlanting}
                        onChange={handleIssuesChange}
                     />
                  </label>
                  <label className='flex flex-row items-center'>
                     <span>Others:</span>
                     <input
                        type="text"
                        name="others"
                        value={formData.issues.others}
                        onChange={handleIssuesChange}
                     />
                  </label>
               </div>
            </label> */}
         </div>

         {/* <div>
            <h2>Last Season Crop Information</h2>
            <div className="grid">
               <label>
                  What was planted last season:
                  <input
                     type="text"
                     name="lastSeasonCrop"
                     value={formData.lastSeasonCrop}
                     onChange={handleChange}
                     required
                  />
               </label>

               <label>
                  Last Season Harvest (bags/acre):
                  <input
                     type="number"
                     name="harvestAmount"
                     value={formData.harvestAmount}
                     onChange={handleChange}
                     required
                  />
               </label>

               <label>
                  Last Season Seed Variety:
                  <input
                     type="text"
                     name="lastSeasonSeedVariety"
                     value={formData.lastSeasonSeedVariety}
                     onChange={handleChange}
                     required
                  />
               </label>

               <label>
                  Last Season Fertilizer Type:
                  <input
                     type="text"
                     name="lastSeasonFertilizerType"
                     value={formData.lastSeasonFertilizerType}
                     onChange={handleChange}
                     required
                  />
               </label>

               <label>
                  Was the field Irrigated Last Season?
                  <select
                     name="lastSeasonIrrigated"
                     value={formData.lastSeasonIrrigated}
                     onChange={handleChange}
                     required
                  >
                     <option value="">Select an option</option>
                     <option value="Yes">Yes</option>
                     <option value="No">No</option>
                  </select>
               </label>
            </div>


            <label className='mt-10'>
               <span className='font-semibold'>Issues Reported by Farmers Last Season plus the Date:</span>
               <div className="flex gap-x-10 gap-y-5 flex-wrap ">
                  <label className='flex flex-row items-center'>
                     <span>Drought:</span>
                     <input
                        type="checkbox"
                        name="drought"
                        checked={formData.lastSeasonIssues.drought}
                        onChange={handleLastSeasonIssuesChange}
                     />
                  </label>
                  <label className='flex flex-row items-center'>
                     Poor/No Germination:
                     <input
                        type="checkbox"
                        name="germination"
                        checked={formData.lastSeasonIssues.germination}
                        onChange={handleLastSeasonIssuesChange}
                     />
                  </label>
                  <label className='flex flex-row items-center'>
                     Locust Infestation:
                     <input
                        type="checkbox"
                        name="locust"
                        checked={formData.lastSeasonIssues.locust}
                        onChange={handleLastSeasonIssuesChange}
                     />
                  </label>
                  <label className='flex flex-row items-center'>
                     Flood:
                     <input
                        type="checkbox"
                        name="flood"
                        checked={formData.lastSeasonIssues.flood}
                        onChange={handleLastSeasonIssuesChange}
                     />
                  </label>
                  <label className='flex flex-row items-center'>
                     Other Pests and Diseases:
                     <input
                        type="checkbox"
                        name="pestsDiseases"
                        checked={formData.lastSeasonIssues.pestsDiseases}
                        onChange={handleLastSeasonIssuesChange}
                     />
                  </label>
                  <label className='flex flex-row items-center'>
                     Animal/Cattle Encroachment:
                     <input
                        type="checkbox"
                        name="cattleEncroachment"
                        checked={formData.lastSeasonIssues.cattleEncroachment}
                        onChange={handleLastSeasonIssuesChange}
                     />
                  </label>
                  <label className='flex flex-row items-center'>
                     Weeds:
                     <input
                        type="checkbox"
                        name="weeds"
                        checked={formData.lastSeasonIssues.weeds}
                        onChange={handleLastSeasonIssuesChange}
                     />
                  </label>
                  <label className='flex flex-row items-center'>
                     Late Planting:
                     <input
                        type="checkbox"
                        name="latePlanting"
                        checked={formData.lastSeasonIssues.latePlanting}
                        onChange={handleLastSeasonIssuesChange}
                     />
                  </label>
                  <label className='flex flex-row items-center'>
                     <span>Others:</span>
                     <input
                        type="text"
                        name="others"
                        value={formData.lastSeasonIssues.others}
                        onChange={handleLastSeasonIssuesChange}
                     />
                  </label>
               </div>
            </label>

         </div> */}

         <button type="submit" className="p-2 bg-[#F96600] hover:bg-black hover:text-white text-white rounded-lg px-4">Submit</button>
      </form>
    </div>
  )
}

export default RealFormsData