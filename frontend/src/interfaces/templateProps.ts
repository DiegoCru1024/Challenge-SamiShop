import characterInfo from "./characterInfo";
import characterDetails from "./characterDetails";

interface TemplateProps {
    charactersData: characterInfo[],
    charactersLoading: boolean,
    charactersError: boolean,
    detailsData?: characterDetails,
    detailsLoading: boolean,
    detailsError: boolean
}

export default TemplateProps