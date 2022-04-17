import axios from "axios";
export class OfficersDescription {
    static getOfficersDescription = async (cb, err) => {
        let val = []

        await axios.get("http://304e-2409-4063-4c08-2450-8468-fb20-602f-c6c5.ngrok.io/officers_assignment").then(
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

        await axios.post("http://304e-2409-4063-4c08-2450-8468-fb20-602f-c6c5.ngrok.io/officers_assignment", usersData).then(
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
        await axios.get(`http://304e-2409-4063-4c08-2450-8468-fb20-602f-c6c5.ngrok.io/officers_assignment?followUpDate=${date}`).then(
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
