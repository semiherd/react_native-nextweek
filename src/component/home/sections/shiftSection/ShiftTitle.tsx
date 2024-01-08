import React from "react"
import SectionTitle from '../SectionTitle'

const ShiftTitle = () => {

   return <SectionTitle 
						label="View All"
						title="Your Shifts"
						onClickParam={{value:"shift_section"}}
					/>
}

export default ShiftTitle;
