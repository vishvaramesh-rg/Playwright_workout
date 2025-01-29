import{test,expect} from '@playwright/test'

var user_id;

test('Get Api',async({request})=>
{
    const response=await request.get('http://localhost:3000/students')
    await expect.soft(await response.status()).toBe(200)
    console.log(await response.json())

}
)

test('post',async({request})=>
{
    const strings = await Math.random().toString(36).substring(2) 
    const response=await request.post("http://localhost:3000/students",
        {
            data:{
                "name":strings, "location":"India", "phone":"5842646456", "courses":["Api","Rest-Assured"]
            },
            header:{
                "Content-Type":"application/json"
            }
         } );

        await expect(await response.status()).toBe(201)
        console.log(await response.json())

        var res=await response.json()
        user_id=await res.id
}
)

test('Put',async({request})=>
{
    const response = await request.put("http://localhost:3000/students/"+user_id,
        {
            data:{
                "name":"Ramesh", "location":"India", "phone":"9875462130", "courses":["Rest API","Rest-Assured"]
            },
            headers:{
                "Content-Type":"application/json"
            }
        });
        await expect(await response.status()).toBe(200)
        console.log(await response.json())
})

test('delete',async({request})=>
{
    const response=await request.delete("http://localhost:3000/students/"+user_id)
    await expect(await response.status()).toBe(200)
})