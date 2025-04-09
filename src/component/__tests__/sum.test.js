import { sum } from "../sum"

test("sum of number test",()=>{
 const r= sum(1,3);
 expect(r).toBe(4);
})