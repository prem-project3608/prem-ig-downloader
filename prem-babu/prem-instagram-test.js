const prem_instagram = require("./prem-instagram")

describe("prem_instagram", ()=>{
    test("Should successfully get multiple videos/images from the post", async ()=>{
        await expect(prem_instagram("https://www.instagram.com/p/CMAMhvgsVal")).toResolve()
    })
    
    test("Should successfully get a single video from the post", async ()=>{
        await expect(prem_instagram("https://www.instagram.com/tv/CdmYaq3LAYo/")).toResolve()
    })

    test("Should successfully get a single image from the post", async ()=>{
        await expect(prem_instagram("https://www.instagram.com/uniaomalacos.ofc/p/C6bkGqBuGwD/?__d=1%2F")).toResolve()
    })

    test("Should give a error on invalid link", async()=>{
        await expect(prem_instagram("https://www.instagram.com/uniaomalacos.ofc/p/C6bkGq323BuGwD/")).toReject()
    })
})
