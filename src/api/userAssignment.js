import axios from "axios";
export class OfficersDescription {
    static getOfficersDescription = async (cb, err) => {
        let val = []

        await axios.get("http://5.161.42.108:5001/officers_assignment").then(
            (response) => {
                var result = response.data;
                val = result
            },
            (error) => {
                console.log(error);
            }
        );
        return val;
    }
    static addOfficersDescription = async (usersData) => {
        let val = []

        await axios.post("http://5.161.42.108:5001/officers_assignment", usersData).then(
            (response) => {
                var result = response.data;
                val = result
            },
            (error) => {
                console.log(error);
            }
        );
        return val;
    }
    static getOfficersData = async (date) => {
        let val = []
        await axios.get(`http://5.161.42.108:5001/officers_assignment?followUpDate=${date}`).then(
            (response) => {
                console.log(response, " response response  response")
                var result = response.data;
                val = result
            },
            (error) => {
                console.log(error);
            }
        );
        return val;
    }
}
