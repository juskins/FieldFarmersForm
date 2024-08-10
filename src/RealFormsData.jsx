import React, { useState } from 'react'

const RealFormsData = () => {
   const [formData, setFormData] = useState({
      farmerFullName: "",
      farmerID: "",
      location: "",
      gps: "",
      phoneOwnership: "",
      phoneType: "",
      insightsPreference: "",
      fieldPolygon: "",
      farmSize: "",
      isIntercropped: "",
      primaryCrop: "",
      secondaryCrop: "",
      plantingDate: "",
      seedType: "",
      seedVariety: "",
      fertilizerType: "",
      isIrrigated: "",
      issues: {
        drought: false,
        germination: false,
        locust: false,
        flood: false,
        pestsDiseases: false,
        cattleEncroachment: false,
        weeds: false,
        latePlanting: false,
        others: "",
      },
      lastSeasonCrop: "",
      harvestAmount: "",
      lastSeasonSeedType: "",
      lastSeasonSeedVariety: "",
      lastSeasonFertilizerType: "",
      lastSeasonIrrigated: "",
      lastSeasonIssues: {
        drought: false,
        germination: false,
        locust: false,
        flood: false,
        pestsDiseases: false,
        cattleEncroachment: false,
        weeds: false,
        latePlanting: false,
        others: "",
      },
    });
  
    const handleChange = (e) => {
     const { name, value } = e.target;
     setFormData((prevData) => ({
       ...prevData,
       [name]: value
     }));
   };
  
   const handleIssuesChange = (e) => {
     const { name, checked, value } = e.target;
     setFormData((prevData) => ({
       ...prevData,
       issues: {
         ...prevData.issues,
         [name]: name === 'others' ? value : checked
       }
     }));
   };
  
   
  // Handle change for last season issues checkboxes
  const handleLastSeasonIssuesChange = (e) => {
     const { name, checked, value } = e.target;
     setFormData((prevData) => ({
       ...prevData,
       lastSeasonIssues: {
         ...prevData.lastSeasonIssues,
         [name]: name === 'others' ? value : checked // Handle 'others' text input differently
       }
     }));
   };
  
   const handleSubmit = (e) => {
     e.preventDefault();
     console.log(formData);
     // handle form submission here

     setFormData({
      farmerFullName: "",
      farmerID: "",
      location: "",
      gps: "",
      phoneOwnership: "",
      phoneType: "",
      insightsPreference: "",
      fieldPolygon: "",
      farmSize: "",
      isIntercropped: "",
      primaryCrop: "",
      secondaryCrop: "",
      plantingDate: "",
      seedType: "",
      seedVariety: "",
      fertilizerType: "",
      isIrrigated: "",
      issues: {
         drought: false,
         germination: false,
         locust: false,
         flood: false,
         pestsDiseases: false,
         cattleEncroachment: false,
         weeds: false,
         latePlanting: false,
         others: "",
      },
      lastSeasonCrop: "",
      harvestAmount: "",
      lastSeasonSeedType: "",
      lastSeasonSeedVariety: "",
      lastSeasonFertilizerType: "",
      lastSeasonIrrigated: "",
      lastSeasonIssues: {
         drought: false,
         germination: false,
         locust: false,
         flood: false,
         pestsDiseases: false,
         cattleEncroachment: false,
         weeds: false,
         latePlanting: false,
         others: "",
      },
    });
   };


  return (
    <div className='flex flex-col justify-center items-center min-h-screen my-16 mb-6'>
      <h1 className='text-3xl font-bold mb-10'> <span className='text-[#F96600]'>Nurus</span> Farmer Form</h1>
      <form onSubmit={handleSubmit} className='w-[90%] flex flex-col gap-10'>
         <div>
            <h2>Identifying Information</h2>
            <div className='grid'>

               <label>
                  <span>Farmer Full Name:</span>
                  <input
                     type="text"
                     name="farmerFullName"
                     value={formData.farmerFullName}
                     onChange={handleChange}
                     required
                  />
               </label>

               <label>
                  Govt Issued Farmer ID Number:
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
                  Choose the State/District/County where the farm is located:
                  <input
                     type="text"
                     name="location"
                     value={formData.location}
                     onChange={handleChange}
                     required
                  />
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
                  <option value="">Select</option>
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
                     <option value="">Select</option>
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
                     <option value="">Select</option>
                     <option value="SMS">SMS</option>
                     <option value="Phone App">Phone App</option>
                  </select>
               </label>
            </div>
         </div>

         <div>
            <h2>Farm Profile</h2>
            <div className='grid'>
               <label>
                  Field Polygon:
                  <input
                     type="text"
                     name="fieldPolygon"
                     value={formData.fieldPolygon}
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
                     <option value="">Select</option>
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
                  Fertilizer Type:
                  <input
                     type="text"
                     name="fertilizerType"
                     value={formData.fertilizerType}
                     onChange={handleChange}
                     required
                  />
               </label>

               <label>
                  Is the field Irrigated?
                  <select
                     name="isIrrigated"
                     value={formData.isIrrigated}
                     onChange={handleChange}
                     required
                  >
                     <option value="">Select</option>
                     <option value="Yes">Yes</option>
                     <option value="No">No</option>
                  </select>
               </label>
            </div>

            <label className='mt-10'>
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
            </label>
         </div>

         <div>
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
                     <option value="">Select</option>
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

         </div>

         <button type="submit" className="p-2 bg-[#F96600] hover:bg-black hover:text-white text-white rounded-lg px-4">Submit</button>
      </form>
    </div>
  )
}

export default RealFormsData