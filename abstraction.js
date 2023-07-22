class chiefBuilding{
    drugProportion(){
        data =  'confidential drug proportion'
    }
}
class outletBuilding extends chiefBuilding{
    painKiller(){
        let drugProportiona = this.drugProportion()
        let tablet = drugProportiona + "mfg process"
        return tablet
    }
}

outletBuildingObj = new outletBuilding()
console.log(outletBuildingObj.painKiller())
