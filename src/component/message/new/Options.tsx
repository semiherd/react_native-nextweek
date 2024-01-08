import VectorIcon from "../../app/icon/VectorIcon"
import { Attach } from '../type/type.message'
import { Color } from "../../../asset/constant/Color"

export const options:Attach[]=[
	{
		id: "image",
		label: "image",
		bg: Color.white,
		icon: <VectorIcon type="ionicon" color={Color.blue} size={24} name="image"	/>,
	}
]