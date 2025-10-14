// Helper functions

export function nameSplitter(fullname: string): [string, string] {

    const words = fullname.trim().split(/\s+/)
    const firstName = words[0] ?? ""
    const lastName = words[1] ?? ""

    return [firstName, lastName]
}

export function genderSelector(gender: string): string {

    if (gender == "Male") {

        return 'label[for="gender-radio-1"]'

    } else if (gender == "Female") {

        return 'label[for="gender-radio-2"]'

    } else  

        return 'label[for="gender-radio-3"]'
}

export function hobbiesSelector(hobby: string): string {

    if (hobby == "Sports") {

        return 'label[for="hobbies-checkbox-1"]'

    } else if (hobby == "Reading") {

        return 'label[for="hobbies-checkbox-2"]'

    } else  
        
        return 'label[for="hobbies-checkbox-3"]'
}