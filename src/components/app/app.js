import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';
import './app.css'

function App(){

    const data = [
        {name: "Vozduhan Bezuhov", salary: 260, increase: false, id: 1},
        {name: "Kapshagai Moldashev", salary: 400, increase: true, id: 2},
        {name: "Koldun KupilKursov", salary: 600, increase: false, id: 3}
    ];
    return(
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList data={data}/>
            <EmployersAddForm/>
        </div>

        
    );
}

export default App;