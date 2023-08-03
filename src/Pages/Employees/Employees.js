import { useContext, useEffect, useState } from "react";
import { PlatformContext } from "../../PlatformContext";
import "./Employees.css";
import EmployeeCard from "./EmployeeCard";
import SearchBox from "../../Page Elements/SearchBox";
import employeeData from "../../employee_data.json";

const fetchEmployees = (searchValue = "") => {
  if (!searchValue) {
    return employeeData;
  }

  const filteredData = [];
  const separateValues = searchValue.split(" ");

  for (let i = 0; i < employeeData.length; i++) {
    const currentEmployee = employeeData[i];
    let firstAndLast = currentEmployee.first_name.toLowerCase();
    firstAndLast += currentEmployee.last_name
      ? currentEmployee.last_name.toLowerCase()
      : "";

    let skip = false;
    for (let j = 0; j < separateValues.length; j++) {
      const value = separateValues[j].toLowerCase();

      if (!value) {
        continue;
      }

      if (firstAndLast.search(value) === -1) {
        skip = true;
        break;
      }
    }

    if (!skip) {
      filteredData.push(currentEmployee);
    }
  }
  return filteredData;
};

function Employees() {
  const isMobile = useContext(PlatformContext);
  const [employees, setEmployees] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    async function fetchData() {
      setEmployees([]);
      const result = await fetchEmployees(searchValue);
      if (!ignore) {
        setEmployees(result);
      }
    }

    let ignore = false;
    fetchData();

    return () => {
      ignore = true;
    };
  }, [searchValue]);

  return (
    <div
      className={
        isMobile ? "employee-container-mobile" : "employee-container-desktop"
      }
    >
      <SearchBox setSearchValue={setSearchValue} />
      {!Array.isArray(employees) || employees.length === 0 ? (
        <div className="no-match">No employees match!</div>
      ) : (
        <div className="employee-cards">
          {employees.map((employee) => {
            return (
              <EmployeeCard
                key={employee.employee_id}
                firstName={employee.first_name}
                lastName={employee.last_name}
                totalHours={employee.labour.reduce(
                  (totalHours, day) => totalHours + day.total,
                  0
                )}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Employees;
