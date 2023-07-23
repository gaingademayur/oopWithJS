class chiefBuilding{
    drugProportion(){
        data =  'confidential drug proportion'
        return data
    }
    abc(){}
}
class outletBuilding extends chiefBuilding{
    // abc(){
    //     // functionality
    // }
    painKiller(){
        let drugProportiona = this.drugProportion()
        let tablet = drugProportiona + "mfg process"
        return tablet
    }
}

outletBuildingObj = new outletBuilding()
console.log(outletBuildingObj.painKiller())

