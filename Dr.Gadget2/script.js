    // JavaScript to dynamically load and display JSON data

    // Function to fetch JSON data


    async function fetchJSONData(personDir, file) {
        try {
            const response = await fetch(`${personDir}/${file}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error fetching JSON data:", error);
        }
    }

    // Function to load and display data for a person
    async function loadAndDisplaypersonData2(personDir) {
        const ehrData = await fetchJSONData(personDir, "ehr.json");
        const phrData = await fetchJSONData(personDir, "phr.json");

        const ehrInfo = document.getElementById("ehr-info");
        ehrInfo.innerHTML = `
            <p>Name: ${ehrData.personalInformation.firstName} ${ehrData.personalInformation.lastName}</p>
            <p>Date of Birth: ${ehrData.personalInformation.dateOfBirth}</p>
            <p>Gender: ${ehrData.personalInformation.gender}</p>
            <p>ID Number: ${ehrData.personalInformation.idNumber}</p>
            <p>Weight (kg): ${ehrData.triage.weightKg}</p>
            <p>Height (cm): ${ehrData.triage.heightCm}</p>
            <p>BMI: ${ehrData.triage.bmi}</p>
            <!-- Add more EHR data here -->
        `;

        const phrInfo = document.getElementById("phr-info");
        phrInfo.innerHTML = `
            <p>Full Name: ${phrData.personalInformation.fullName}</p>
            <p>Date of Birth: ${phrData.personalInformation.dateOfBirth}</p>
            <p>Gender: ${phrData.personalInformation.gender}</p>
            <p>Address: ${phrData.personalInformation.address}</p>
            <p>Phone Number: ${phrData.personalInformation.phoneNumber}</p>
            <p>Emergency Contact's Name: ${phrData.personalInformation.emergencyContact.name}</p>
            <p>Relationship: ${phrData.personalInformation.emergencyContact.relationship}</p>
            <p>Phone Number: ${phrData.personalInformation.emergencyContact.phoneNumber}</p>
            <!-- Add more PHR data here -->
        `;

        // Determine the patient's gender and set the avatar accordingly
        const patientAvatar = document.getElementById("patient-avatar");
        if (ehrData.personalInformation.gender === "Male") {
            patientAvatar.src = "male-avatar.png";
        } else if (ehrData.personalInformation.gender === "Female") {
            patientAvatar.src = "female-avatar.png";
        }
        // You may need to adjust the image source paths.
    }

    // Define an array of person directory names and corresponding names
    const personData2 = [
        {
            name: "Cioban Oleasea",
            dir: "Cioban Oleasea"
        },
        {
            name: "Corobcean Ion",
            dir: "Corobcean Ion"
        },
        {
            name: "Dancean Corneliu",
            dir: "Dancean Corneliu"
        },
        {
            name: "Seminiuc Alina",
            dir: "Seminiuc Alina"
        },
        {
            name: "Sergiu Ilie",
            dir: "Sergiu Ilie"
        }
    ];

    // // Populate the dropdown list
    // const personSelect2 = document.getElementById("person-select");
    // personData2.forEach((person) => {
    //     const option = document.createElement("option");
    //     option.value = person.dir;
    //     option.textContent = person.name;
    //     personSelect2.appendChild(option);
    // });

    // Event listener for dropdown selection
    // personSelect2.addEventListener("change", (event) => {
    //     const selectedDir = event.target.value;
    //     loadAndDisplaypersonData2(`Source data-20230909T223102Z-001/Source data/${selectedDir}`);
    // });

    // Initial load of the first person's data
    loadAndDisplaypersonData2(`Source data-20230909T223102Z-001/Source data/${personData2[0].dir}`);

