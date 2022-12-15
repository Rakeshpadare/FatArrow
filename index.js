class student{
    constructor(name,age,mark){
        this.name=name
        this.age=age
        this.mark=mark
    }
    setPlacementAge(minAgeInterview){
        return (minMarks)=> {
            if(this.mark>minMarks && this.age>minAgeInterview){
                console.log(`${this.name} is ready for interview`)
            }
            else{
                console.log(`${this.name} is not ready for interview`)
            }
        }

    }
}

const rakesh= new student('rakesh',19,55);
const mayur= new student('mayur',17,30);
rakesh.setPlacementAge(18)(45)
mayur.setPlacementAge(18)(45)