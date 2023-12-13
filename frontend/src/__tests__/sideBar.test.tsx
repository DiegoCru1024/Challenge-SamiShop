import CharacterInfo from "../interfaces/characterInfo";
import SideBar from "../components/sideBar/sideBar";
import {render} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";

const characterTestData: CharacterInfo[] = [
    {id: 'cGVvcGxlOjM=', name: 'R2-D2', species: {name: 'Droid'}, homeworld: {name: 'Naboo'}},
    {id: 'cGVvcGxlOjEz', name: 'Chewbacca', species: {name: 'Wookie'}, homeworld: {name: 'Kashyyyk'}},
    {id: 'cGVvcGxlOjE1', name: 'Greedo', species: {name: 'Rodian'}, homeworld: {name: 'Rodia'}},
    {id: 'cGVvcGxlOjQ0', name: 'Darth Maul', species: {name: 'Zabrak'}, homeworld: {name: 'Dathomir'}},
]

describe('SideBar Component', () => {
    it('render SideBar', () => {
        const {getByText} = render(
            <BrowserRouter>
                <SideBar characterData={characterTestData} loading={false} error={false}/>
            </BrowserRouter>
        )
    })

    it('render SideBar while loading', () => {
        const {getByText} = render(
            <SideBar characterData={[]} loading={true} error={false}/>
        );

        const loadingElement = getByText('Loading');
        expect(loadingElement).toBeInTheDocument();
    });

    it('render SideBar with error', () => {
        const {getByText} = render(
            <SideBar characterData={[]} loading={false} error={true}/>
        );

        const errorMessageElement = getByText('Failed to Load Data');
        expect(errorMessageElement).toBeInTheDocument();
    });
})