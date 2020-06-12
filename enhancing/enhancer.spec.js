const enhancer = require('./enhancer.js');
// test away!

describe('enhancer functions', ()=>{
    describe('test succeed()', ()=>{
        let item = {name:"Springjack boots", durability:100,enhancement:2}
        let item2 = {name:"Spriggans Wrath", durability: 79, enhancement:20}

        it('increases the enhancement level by 1 unless the enhancement level is 20 and then it changes nothing, durability is unchanged', ()=>{
            enhancer.succeed(item)
            expect(item.enhancement).toBe(3)
        })

        it('increases the enhancement level by 1 unless the enhancement level is 20 and then it changes nothing, durability is unchanged', ()=>{
            enhancer.succeed(item2)
            expect(item2.enhancement).toBe(20)
        })

    })
    describe('test fail()', ()=>{
        let item = {name:"Springjack boots", durability:100,enhancement:2}
        let item2 = {name:"Spriggans Wrath", durability: 79, enhancement:20}

        it("if the items enhancement is less than 15 the durability is decreased by 5, if greater than 15 durability is decreased by 10, if items enhancement level is greater than 16 the enahncement level decreases by 1",()=>{
            enhancer.fail(item)
            expect(item.durability).toBe(95)
        })
        it("if the items enhancement is less than 15 the durability is decreased by 5, if greater than 15 durability is decreased by 10, if items enhancement level is greater than 16 the enahncement level decreases by 1",()=>{
            enhancer.fail(item2)
            expect(item2.durability).toBe(69)
            expect(item2.enhancement).toBe(19)
        })
    })
    describe('test repair()', ()=>{
        let item = {name:"Springjack boots", durability:100,enhancement:2}
        let item2 = {name:"Spriggans Wrath", durability: 79, enhancement:20}
       
         
        it("changes an items durability to 100 and then returns that item",()=>{
            enhancer.repair(item)
            expect(item.durability).toBe(100)
           
        })
        it("changes an items durability to 100 and then returns that item",()=>{
        
            enhancer.repair(item2)
            expect(item2.durability).toBe(100)
        })
    })
    describe('test get()', () =>{

    })
})
