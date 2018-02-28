const expect = require('chai').expect;
const countHorses = require('../app').countHorses;

// initial value provided at function below tests
const BARNS = initBarns();

describe('addHorses()', () => {
    it('the output SHOULD be a number', () => {
        // arrange
        const input = BARNS;
        const expected = 'number';

        // act
        const result = countHorses(input);

        // assert
        expect(typeof(result)).to.equal(expected);
    });
    it('an input of a non array type should throw an error', () => {
        // arrange
        const input = BARNS;
        const expected = 'Error - Invalid Argument: a non array value was provided as the input.';
        let result = 'No error thrown';

        // act
        try {
            const result = countHorses(input);
        }
        catch(e) {
            result = e.message;
        }

        // assert
        expect(result).to.equal(expected);
    });
    it('a valid input SHOULD pass', () => {
        // arrange
        const input = BARNS;
        const expected = 128;

        // act
        const result = countHorses(input);

        // assert
        expect(input).to.equal(result);
    });
});

function initBarns() {
    return [{
        "id": "37651064-5215-2357-9149-4bd33910912f",
        "stalls": [{
            "id": "03649e97-71fd-a84f-11e6-92bd9f26148b",
            "horses": [{
                "id": "5f899df4-5f0c-a3f8-c1bf-3bb9731289b0",
                "name": "ChelseaDott"
            }]
        }, {
            "id": "0b5b6cf7-a93c-d5bd-9361-f6cee6bbf256",
            "horses": [{
                "id": "87c675bc-418d-6a16-2709-028f9dda75e8",
                "name": "AdeyViquelia"
            }]
        }, {
            "id": "3e9939f4-37c8-f3dc-3e66-34d9a18c02a1",
            "horses": [{
                "id": "f90d6ab2-4f73-1a82-aeb0-57f8e3b192e7",
                "name": "VickyFortier"
            }]
        }, {
            "id": "8ee99a4d-fdd6-65a5-4777-795f14b75cc1",
            "horses": [{
                "id": "7a23161d-aa91-75d8-0907-89a701e74b87",
                "name": "BabbieCompton"
            }]
        }, {
            "id": "a5c5ead8-7cfc-5e79-c07d-45d5939c3b29",
            "horses": [{
                "id": "bdbf7f12-df94-9fd3-292a-fb49254e7117",
                "name": "VanyaJob"
            }]
        }, {
            "id": "c9ecbd15-4eb5-9d4d-1ff6-635d29bf65ed",
            "horses": [{
                "id": "4001095c-05de-9849-cab4-6d43392e12c1",
                "name": "DarciTiemroth"
            }, {
                "id": "ac29b8ca-f3b2-a21f-fde1-04a38579c35b",
                "name": "NicoliMoyra"
            }]
        }, {
            "id": "d0d962ab-fbac-3e22-aec3-b00f8dc207d2",
            "horses": [{
                "id": "bad4c8da-2ff9-eb9a-1bf8-a725fccf9398",
                "name": "EmelitaDelaine"
            }]
        }, {
            "id": "02c48812-09b7-c2bf-549f-b110eb8c24d2",
            "horses": [{
                "id": "5ec78fa2-7f85-a4f8-8561-4705e885d41c",
                "name": "SibelAvi"
            }]
        }, {
            "id": "eb546163-ff9f-3631-89d4-a24347974959",
            "horses": [{
                "id": "49c7de60-da51-e1af-5b04-6a03f7b7a5f4",
                "name": "JessamynGaylord"
            }]
        }, {
            "id": "0f4dc81e-1924-898c-302b-4b3c9e609f57",
            "horses": [{
                "id": "f21fdc1d-dc55-5d11-472a-6b3a3842a9dd",
                "name": "PerlaKulseth"
            }]
        }, {
            "id": "409d571c-6245-0eba-e8e0-be83b7bda3c6",
            "horses": [{
                "id": "946ea076-11a9-fbeb-9e4b-b2c5fc1940d9",
                "name": "GwenetteHiltner"
            }]
        }, {
            "id": "169de35a-4150-b855-adef-0b80e1fd5a99",
            "horses": [{
                "id": "91d2c82c-d4cd-75cd-cf49-1c5a62333ba3",
                "name": "IvonneLais"
            }]
        }, {
            "id": "beed588d-d608-75cd-ac24-0ed08b7d2ad4",
            "horses": [{
                "id": "cdb353ae-b18f-d95f-a2dd-671a886610c0",
                "name": "EadithTalbot"
            }]
        }, {
            "id": "c99efcdc-8b18-ce0a-f69b-75146888023e",
            "horses": [{
                "id": "36c7f6a7-ff40-62b4-a7ef-b57ec633f843",
                "name": "ElveraThamos"
            }]
        }, {
            "id": "27c8e6e8-66e7-be13-8684-f3aeb2b0beab",
            "horses": [{
                "id": "66101bd4-a9ef-eb89-a7da-eddf574797ac",
                "name": "SydneyCanon"
            }]
        }, {
            "id": "227c54db-c465-8c89-a1e9-97ec1490e6ca",
            "horses": [{
                "id": "ae175c49-c455-f90d-1731-c8c1c5a1bcd6",
                "name": "WinnahBlen"
            }]
        }, {
            "id": "297bfb38-aaac-df91-1193-ad4bf9d0586c",
            "horses": [{
                "id": "b16781c0-418d-b7b3-3c41-ea235a010566",
                "name": "FlorenzaVogel"
            }]
        }, {
            "id": "844148ee-de07-2836-3daf-123605d54fb5",
            "horses": [{
                "id": "4a8f0778-5581-a408-31b6-726f6d08a9d9",
                "name": "PamHung"
            }]
        }, {
            "id": "27ce898c-c0f8-14cf-08f7-6ce5114215ae",
            "horses": [{
                "id": "efa7bc34-60ce-bdc8-ffc5-53a5fd06bf2a",
                "name": "CosettaFinbar"
            }]
        }, {
            "id": "0860fcae-c3be-6e9b-d52e-bdefed5df615",
            "horses": [{
                "id": "af36caee-7702-e47f-310b-0d44169c85ab",
                "name": "ValryMalchy"
            }]
        }]
    }, {
        "id": "b5fc1bd5-b6fc-b475-649f-aa2de35ffede",
        "stalls": [{
            "id": "3372be62-8c3b-00bc-95ed-cb770d87e0f7",
            "horses": [{
                "id": "ef8d49c6-b4ac-55d2-82be-7fb0e662a37f",
                "name": "AllieLigetti"
            }]
        }, {
            "id": "1ba48414-498a-f972-5096-440e6d90eb0d",
            "horses": [{
                "id": "34a919b1-bc0b-dee5-34b0-5d501e4bc4da",
                "name": "TiffanieJohnstone"
            }]
        }, {
            "id": "5d799d3d-232e-7046-ff15-12caf9734170",
            "horses": [{
                "id": "fa3c4138-5535-d89b-a518-8c7b6892030b",
                "name": "CarolynDoti"
            }]
        }, {
            "id": "73881ffc-98cc-14f9-a5b6-640d42f9290d",
            "horses": [{
                "id": "769c0e3b-9a8a-11ba-cfc5-9ff292f62a40",
                "name": "WallyRoach"
            }]
        }, {
            "id": "dea86f95-a134-9a8b-12b2-dbb701db2b2e",
            "horses": [{
                "id": "c97c7be3-4a25-9cf9-4a4b-394ba7deb573",
                "name": "AlikaEldreeda"
            }]
        }, {
            "id": "b8a8e7f5-f6a8-f34a-d0c0-cecff400193d",
            "horses": [{
                "id": "45732f1b-1891-7111-afec-84a9a0914d22",
                "name": "DardaEckblad"
            }]
        }, {
            "id": "5c89b0c9-1ca4-e359-1f47-f2dbd5d68352",
            "horses": [{
                "id": "51e14263-7566-e80a-56f4-2db49fb92324",
                "name": "RupertaTaddeusz"
            }]
        }, {
            "id": "2ab2c34a-1b93-202c-47e0-02203a991a9f",
            "horses": [{
                "id": "b5c3d015-5879-c247-8cab-ae62de6424c9",
                "name": "ChelsyLowrie"
            }]
        }, {
            "id": "fa334179-c1eb-68ac-1891-13e09c7d1b65",
            "horses": [{
                "id": "7fb89f74-3992-ee62-3140-4b1a9329762c",
                "name": "RachelMarlo"
            }]
        }, {
            "id": "cd700387-5eaf-294d-6856-ecb65213016a",
            "horses": [{
                "id": "e3b0e9d0-a258-fead-33b9-9357da05f447",
                "name": "HailyWaki"
            }]
        }, {
            "id": "cfc5a4ae-4090-6826-2475-b13db71dff0b",
            "horses": [{
                "id": "c850c0a8-e2a7-eca5-1057-dee77472438e",
                "name": "OlympeCroft"
            }]
        }, {
            "id": "906759b2-08fb-169f-13fe-714108b1ca85",
            "horses": [{
                "id": "a202967e-9c0f-2cc5-d221-850257bcd737",
                "name": "SharleneSybyl"
            }]
        }, {
            "id": "bdf93dc8-3399-6dd1-74df-786fa781df5a",
            "horses": [{
                "id": "13a1bd38-03f5-0632-cfcc-912e6f20cdb5",
                "name": "DellyGilberta"
            }]
        }, {
            "id": "a46e73ce-370f-b7fd-24c0-df7a59f6f9d2",
            "horses": [{
                "id": "cd57ad2d-b66a-31ad-e1ac-02939ff9c4a9",
                "name": "JerriePouncey"
            }]
        }, {
            "id": "54e72c98-b3be-a063-7b7c-a063d9164f38",
            "horses": [{
                "id": "87e3e1d6-8e73-e9d0-53e6-21508b5e0b93",
                "name": "EthelindHolly"
            }]
        }, {
            "id": "795a34ec-4dc5-5adc-1dac-766570474311",
            "horses": [{
                "id": "be87d6d4-186d-5fc2-cb87-4de9d4b05bb9",
                "name": "DoraliaGerald"
            }]
        }, {
            "id": "fa384b16-74fb-2e9a-1481-3dd20ae27507",
            "horses": [{
                "id": "b270903f-a290-3309-99cd-061aaedf7f11",
                "name": "StefanieAnsley"
            }]
        }, {
            "id": "cbec5654-b8f5-4786-f1f9-b5e4098167bd",
            "horses": [{
                "id": "7717cd90-82c2-dbfd-0b9c-c576b61b412f",
                "name": "AmaleaRafi"
            }]
        }, {
            "id": "a79b0727-7b19-2d73-d332-901a60a8e28c",
            "horses": [{
                "id": "55363459-473c-be20-84ef-9aed2d208d05",
                "name": "CindyCurrie"
            }]
        }, {
            "id": "6e1c6548-9242-cdae-15c8-ddbd05ee23a8",
            "horses": [{
                "id": "6c3a5539-45f6-e462-b6f2-a1ecdb79d063",
                "name": "DoroteyaLangham"
            }]
        }]
    }, {
        "id": "4256fd36-509f-df21-33b1-22cf8d06a12a",
        "stalls": [{
            "id": "566837d8-0d3c-3a8b-5645-798a0cbac348",
            "horses": [{
                "id": "7217ae51-1e88-c1d2-5a70-f873e38ed431",
                "name": "DulcianaMetcalf"
            }]
        }, {
            "id": "2aecc498-c52b-0848-9161-c2028e8d5251",
            "horses": [{
                "id": "59e6fbf9-4a17-d7ad-349f-8bf5ebebbf09",
                "name": "CaroPaola"
            }, {
                "id": "e42f7ee0-4c14-2561-f8fe-0cf48c2a46f9",
                "name": "DanilaYseult"
            }]
        }, {
            "id": "f79bb517-2b10-c20b-2af1-77ca8a2e8009",
            "horses": [{
                "id": "e295be8a-4668-8fd4-c567-96713cb325ba",
                "name": "GustaSpoor"
            }]
        }, {
            "id": "44730a8f-2427-4f21-0d3b-69da14a2fa19",
            "horses": [{
                "id": "a9c2799e-1e1b-f377-ab8e-1a3801b94173",
                "name": "AnalieseScharff"
            }]
        }, {
            "id": "9eafb0d4-3b02-538e-22f9-ade19efd05ae",
            "horses": [{
                "id": "16300802-1ef4-8113-1cbb-8ee3f33305dd",
                "name": "JoelleStesha"
            }]
        }, {
            "id": "b28fe47a-23de-81be-cccd-050a67051e32",
            "horses": [{
                "id": "265676f2-3dca-93d0-537b-86fa93763e23",
                "name": "BarryBeaudoin"
            }]
        }, {
            "id": "b37a00e6-cb71-72a9-2fdf-9102544c51df",
            "horses": [{
                "id": "64c67fb7-2677-e19e-6ba0-e0fc98fe5287",
                "name": "CathieChien"
            }]
        }, {
            "id": "02f1e78b-a120-3861-c8ff-54de33648313",
            "horses": [{
                "id": "b14b9969-06d2-bf35-0e74-0f096daffa47",
                "name": "AmityHose"
            }]
        }, {
            "id": "12f342a7-bc3c-5311-8759-1fbeebea490c",
            "horses": [{
                "id": "6d7c5e40-d66d-3ffc-d65f-d9f8233de279",
                "name": "AgrethaAdamek"
            }]
        }, {
            "id": "b9c24fab-7b13-422d-0fa6-7887ea8f915d",
            "horses": [{
                "id": "b5816799-23c1-ef9e-7841-4e03852eaa6b",
                "name": "EolandeGanny"
            }]
        }, {
            "id": "5f09a30d-8349-87e3-1f71-8d28951d4df8",
            "horses": [{
                "id": "061a7184-c415-b6e9-e5eb-9b8b3f186701",
                "name": "SibealMoreen"
            }]
        }, {
            "id": "ea87ca1b-dab4-9cb4-5103-efb0e8ef62bb",
            "horses": [{
                "id": "36ee376d-0fe9-8fcd-3eec-7da1c90d7d69",
                "name": "AuroreIda"
            }]
        }, {
            "id": "029368d2-9b9f-86b0-4cef-fc446ad05f0b",
            "horses": [{
                "id": "7820592d-a368-b01c-992a-ef85a367e667",
                "name": "TildiMencher"
            }]
        }, {
            "id": "cb10e006-faa0-cd5b-28a7-5dff79d1d19a",
            "horses": [{
                "id": "09c3e92c-4201-7afc-c213-dc65d87018e1",
                "name": "EvangelinSewole"
            }]
        }, {
            "id": "56b4fe43-3800-2403-d384-e0dd8e829ea3",
            "horses": [{
                "id": "45415c4d-ccf5-6ec3-1d22-cb94fd5ba276",
                "name": "PatriziaRew"
            }]
        }, {
            "id": "17b2c0b4-04ab-efd1-914e-725d6c9a6e75",
            "horses": [{
                "id": "0bb402d9-b8fe-2843-951d-bacf1aaec636",
                "name": "ClaryRamunni"
            }]
        }, {
            "id": "d1a4dac8-5369-ca51-5142-b89fc8874108",
            "horses": [{
                "id": "b0fd4f5a-18ff-5a9a-a612-2c463e8c0431",
                "name": "TreschaJdavie"
            }]
        }, {
            "id": "0a8f48d9-d126-9181-c990-3e14d2940fb2",
            "horses": [{
                "id": "7f1212e8-88f1-b511-f195-a0cba2b115b7",
                "name": "CassTeri"
            }]
        }, {
            "id": "8245d84b-3b71-360c-ac12-03c98ce19115",
            "horses": [{
                "id": "cb060d6d-4970-5f2e-d169-bdeb2c200917",
                "name": "SissyChickie"
            }]
        }, {
            "id": "45d7559c-6bb4-dbc4-42b8-119e3d0d147d",
            "horses": [{
                "id": "b97a7f6d-fbcd-50b4-fa56-489fb793c5f4",
                "name": "DarsieWells"
            }]
        }]
    }, {
        "id": "c874c9a8-7c05-9f7e-8469-99f00c9059b9",
        "stalls": [{
            "id": "fa0f18a2-a44c-2af9-d433-9ecf0d6138a4",
            "horses": [{
                "id": "b24ee232-361d-6de3-133e-475407814104",
                "name": "ArdythMayne"
            }]
        }, {
            "id": "e1e5418e-17e8-7a89-4f2c-adb7699666c8",
            "horses": [{
                "id": "4d1e37c0-0723-396e-fecb-8d0690b9492c",
                "name": "GrayMelloney"
            }]
        }, {
            "id": "f5f63b0c-b042-fc06-938f-43b78dc1c496",
            "horses": [{
                "id": "a32674ac-f785-af7e-163b-d1a7fe111ff7",
                "name": "AggiAmandie"
            }]
        }, {
            "id": "48b5a5aa-9892-4ac3-d7e6-2548679393f5",
            "horses": [{
                "id": "6baaf6d4-8b53-adec-596a-ab9b960d813a",
                "name": "RhodieShewchuk"
            }]
        }, {
            "id": "355b873b-4f17-ff62-57a9-eaed2cfc43d4",
            "horses": [{
                "id": "978aca4a-a7f3-f8a9-9664-783eb61c4276",
                "name": "WendelineAgrippina"
            }]
        }, {
            "id": "6b1489d7-af73-1e36-357e-6ca72d279a58",
            "horses": [{
                "id": "2ee7747c-b2e6-2ad1-b2f8-e4b7bbb7b691",
                "name": "PhylysJeramie"
            }]
        }, {
            "id": "27dc943c-fff0-6280-1980-edf1c47210d9",
            "horses": [{
                "id": "a04e6f94-f4d4-6255-2a47-140e56dfae7c",
                "name": "KaraSalisbarry"
            }]
        }, {
            "id": "0701ffff-595f-e523-e00f-cb8437180cfb",
            "horses": [{
                "id": "831aac37-c482-2a7f-9872-c96c5401b833",
                "name": "LilithBohrer"
            }]
        }, {
            "id": "a36601ac-2e6b-6c9b-f969-02e7fafcf273",
            "horses": [{
                "id": "991b6503-13f7-315e-7335-9222150f2508",
                "name": "TanhyaDoy"
            }]
        }, {
            "id": "688528d7-8cc2-9fc1-5ad2-efbf3718e0be",
            "horses": [{
                "id": "bd24057b-7986-73b6-811b-2911a0b090ba",
                "name": "KevinaGuise"
            }]
        }, {
            "id": "75251d7b-2134-770d-86ae-9edc8ace4329",
            "horses": [{
                "id": "85334cb2-ed46-a3cc-6012-fda2500043e5",
                "name": "CharleenMyrtie"
            }]
        }, {
            "id": "4733f477-c3ef-7569-243f-e096cf86bd4a",
            "horses": [{
                "id": "53ce85d3-3bd3-7497-f7e3-c41dee7d706c",
                "name": "AnetChivers"
            }]
        }, {
            "id": "3b0fb2a4-b803-90c1-5333-a0ef244ca632",
            "horses": [{
                "id": "74f0fb10-56a9-8170-d4fd-b75c657a9b2f",
                "name": "RonnicaSim"
            }]
        }, {
            "id": "cb022563-0543-a54c-a6b8-6390db645b48",
            "horses": [{
                "id": "650073f0-1fa5-aca1-6b4b-9ada8d3d49be",
                "name": "ChristinaDollar"
            }]
        }, {
            "id": "298bd52f-39ce-c622-a3f0-b5f3399c1366",
            "horses": [{
                "id": "a4c68573-23dc-6c4f-355b-ac4a6e0f1a77",
                "name": "DehliaTrant"
            }]
        }, {
            "id": "01e41653-5635-8f28-ab7e-f626a54d2c24",
            "horses": [{
                "id": "b0cd1331-f920-2948-9274-ad4f46397ac4",
                "name": "MadelonEdlyn"
            }]
        }, {
            "id": "69e97988-ffd8-b9a8-3ceb-b4e9742fa06c",
            "horses": [{
                "id": "bdddf469-1afa-78f1-897b-9a8d2abb95cc",
                "name": "CristabelPlume"
            }]
        }, {
            "id": "b48614da-4ae2-211e-f50a-e9050875739a",
            "horses": [{
                "id": "f2668a72-078e-ce14-8530-ec9b30339e63",
                "name": "ArdaGetter"
            }]
        }, {
            "id": "8936938c-719d-92db-7f31-235e1a19c116",
            "horses": [{
                "id": "22db3a9e-2c79-9ff2-da86-bcde537d6518",
                "name": "AlamedaDanete"
            }]
        }, {
            "id": "3d92b69e-3058-0577-4604-7a3eb3fabe81",
            "horses": [{
                "id": "c4b26927-6dd9-8fcc-ff86-6bfcd10d4c5f",
                "name": "NonieOsman"
            }]
        }]
    }, {
        "id": "ed31ccae-72c8-6da0-35e4-e77391c1ecb6",
        "stalls": [{
            "id": "eb542c8a-2109-8a72-9093-63c62edfac83",
            "horses": [{
                "id": "d67945a4-5fb3-01d8-6524-2e938d9a7599",
                "name": "DoreEdmund"
            }]
        }, {
            "id": "76f21630-49f2-2d42-9462-1a05d3cedb1b",
            "horses": [{
                "id": "f30f1416-a22c-e69b-037c-b077dfc9d010",
                "name": "TaliaOrran"
            }, {
                "id": "1cb4c255-fe12-243e-081e-98ff94cd8360",
                "name": "TiphaniGoles"
            }]
        }, {
            "id": "bd3ab1e7-582a-cd20-1aa0-dae23c0de21f",
            "horses": [{
                "id": "0679379b-0b1f-7e26-9900-5b9707be85a8",
                "name": "JackiSirmons"
            }]
        }, {
            "id": "b1567a38-1ac4-7b14-efd5-6329153c9a88",
            "horses": [{
                "id": "bdba47ec-ce04-d15b-7b53-81bd7acc4062",
                "name": "GlenDowlen"
            }]
        }, {
            "id": "7b636404-a609-6a38-bfd4-c69a194d43e5",
            "horses": [{
                "id": "9f2808b5-7bee-345d-7cd6-cc3f48f65cb3",
                "name": "AnnemariePreston"
            }]
        }, {
            "id": "98f204e3-b6b8-3514-0a05-2b4d73f5329b",
            "horses": [{
                "id": "55abbba8-d913-cc1e-58a2-0f0b07e8a775",
                "name": "MaigaBrunk"
            }]
        }, {
            "id": "204b0567-e13f-3f03-60b9-8d73e78fa34b",
            "horses": [{
                "id": "3c51ef11-e515-a7fc-3bf5-da597bb75220",
                "name": "AmelieEwer"
            }]
        }, {
            "id": "234c660a-5f65-65d4-eb26-e480e0dd9669",
            "horses": [{
                "id": "b0565a5e-14bd-7dac-688e-9dcf399a3f0f",
                "name": "VannieGorrian"
            }]
        }, {
            "id": "38c13bd2-d56c-d33b-e866-daf2137f278e",
            "horses": [{
                "id": "aacccd12-3f36-74fa-ac6f-8dfe4a9209c0",
                "name": "RosyToth"
            }, {
                "id": "6f2b9ecc-a068-f7b3-9737-b466219d147b",
                "name": "SaundraZonda"
            }]
        }, {
            "id": "445f5710-17ea-2d54-0401-44fcd818d64b",
            "horses": [{
                "id": "c5652292-33a5-650c-4896-4bd2cdfd3ad1",
                "name": "OliviaCramer"
            }]
        }, {
            "id": "277302db-0652-b660-efbb-ec20b2e66ea5",
            "horses": [{
                "id": "0ca6d336-1f65-5627-aad1-ec757049a32c",
                "name": "MernaMedeah"
            }]
        }, {
            "id": "4ad621e6-61aa-6904-0c94-78d965f29015",
            "horses": [{
                "id": "8aeebe4e-ecc1-72db-a744-33199328dabd",
                "name": "MeggieJasisa"
            }]
        }, {
            "id": "f543cef1-2f9f-10c6-ac05-c48a5cc7c27b",
            "horses": [{
                "id": "945e8a36-d284-2129-a1e9-c5dae43b53bc",
                "name": "TaniSeif"
            }]
        }, {
            "id": "8601bc92-110a-76bf-a8df-85c31c6baa80",
            "horses": [{
                "id": "9721563a-82ad-0770-f7c9-c6f5b5caade6",
                "name": "LizzieRahr"
            }]
        }, {
            "id": "bf8cf82a-3e13-1dc6-45d3-a7ad42bfa82e",
            "horses": [{
                "id": "db1225c3-9358-6d19-3fd6-053cebb29c1d",
                "name": "NoreneLichtenfeld"
            }]
        }, {
            "id": "c68f3050-ef3b-47af-042c-ad9c3d499a54",
            "horses": [{
                "id": "0b1744f5-b7a7-7fc2-b36e-487382509ffa",
                "name": "MelVioleta"
            }]
        }, {
            "id": "353cb21b-8145-0093-fda0-4597a39e0b31",
            "horses": [{
                "id": "7f8bc729-18a5-56be-9d05-67d5694cfccb",
                "name": "SabaKendricks"
            }]
        }, {
            "id": "678ba71f-3314-3819-c4e5-18cd74368fe4",
            "horses": [{
                "id": "8c4b3b45-8a42-5eca-32b7-d74c4f1c9b89",
                "name": "DelorisLaurance"
            }]
        }, {
            "id": "87e8cce2-26ec-7280-21c6-2d8da84efc9a",
            "horses": [{
                "id": "9a36b2be-08fc-1eb3-98e8-75fade15f638",
                "name": "CorinneHelyn"
            }]
        }, {
            "id": "f2d4b5e8-b427-163a-b802-02d604ff4b71",
            "horses": [{
                "id": "5059e877-1d75-2c4a-0911-907b2abaa4a8",
                "name": "JulietteLivia"
            }]
        }]
    }, {
        "id": "a7e971e8-f8b4-02ce-cf57-310bce796830",
        "stalls": [{
            "id": "b6c52841-49c3-db6b-cbfc-8064fd3a37f3",
            "horses": [{
                "id": "1b7e4fa6-44fa-07b3-96d1-921e46d7efd2",
                "name": "FarraSophia"
            }, {
                "id": "ad1a2789-1df4-0f76-44a8-ad7c8d063bb7",
                "name": "MelaEmlyn"
            }]
        }, {
            "id": "01f1fd39-91c1-4654-c79a-c9ecac7b4789",
            "horses": [{
                "id": "8bf639fd-8a21-7c5a-02e2-f3950baef9f2",
                "name": "CarleneKali"
            }]
        }, {
            "id": "6e9be35b-449e-4ff4-86b5-d1e3fd2060e1",
            "horses": [{
                "id": "e8c0e114-b65d-c9cc-cef9-55c97c0b59a6",
                "name": "WallyBrunk"
            }]
        }, {
            "id": "6dda967b-3456-3212-54f8-5fface6a4465",
            "horses": [{
                "id": "55f9828f-ed1c-bd55-fa08-42ceac2b7284",
                "name": "RonnyPris"
            }]
        }, {
            "id": "bc617eaf-f145-a525-854a-68fd649cbf75",
            "horses": [{
                "id": "385d72e6-1740-7ea1-be9e-ceb18d4a84d8",
                "name": "BrearLelith"
            }]
        }, {
            "id": "e0ee0063-73a9-5367-d86f-752eec85c22b",
            "horses": [{
                "id": "2e3ed33c-24a8-baa0-c621-297d3321a94c",
                "name": "KristeBurchett"
            }, {
                "id": "1a64a6e4-11cf-588a-f0d1-2321180fa866",
                "name": "MickyFen"
            }]
        }, {
            "id": "812d8055-a12b-3658-ae01-3ce1d9058352",
            "horses": [{
                "id": "253d6e9c-dbd2-25a4-4e0e-a19cd0015f8e",
                "name": "MerlPega"
            }, {
                "id": "573a5310-533f-405c-1a45-713b0dfdaeaf",
                "name": "KalilaDouville"
            }]
        }, {
            "id": "bd9bd1cf-2953-227d-5a4f-49b76d759624",
            "horses": [{
                "id": "99e27a1b-acdf-7239-d0e5-a78a191593fd",
                "name": "DulseaBerke"
            }]
        }, {
            "id": "ec029b29-b830-08e3-f236-7b970b927cc4",
            "horses": [{
                "id": "98559e4c-d6a3-bf97-53b7-13dbbff12501",
                "name": "EstelleGraff"
            }]
        }, {
            "id": "39419adc-2f59-3677-077e-04149da6a2e6",
            "horses": [{
                "id": "813f0dd6-cc1b-d98e-d477-f1b6ee43e57f",
                "name": "CynthyKant"
            }]
        }, {
            "id": "e215f7f4-2357-f53f-0329-3eaeb6ef0dc3",
            "horses": [{
                "id": "f79ea990-4f37-8c36-c36b-1e68140a4543",
                "name": "FancyKinney"
            }]
        }, {
            "id": "d856e3d5-634d-f286-1333-9e912990787b",
            "horses": [{
                "id": "5e3e8490-c358-5eb5-d920-4e54115c0517",
                "name": "EttyMadid"
            }]
        }, {
            "id": "52c719ac-9c7f-aef9-c36b-6b5a0b266adb",
            "horses": [{
                "id": "c8c85e8f-38e0-8f85-5cf0-5638d9ee8087",
                "name": "SuzetteAkin"
            }]
        }, {
            "id": "d3883aa5-b896-649b-3ad2-616722a2b9ca",
            "horses": [{
                "id": "9991c370-448f-439b-2109-a14a6b0e3fd1",
                "name": "GypsyByrann"
            }]
        }, {
            "id": "92ab5bfe-1b4c-456b-c7ef-f8c22f9d6b03",
            "horses": [{
                "id": "e0fc8bfb-08cd-00aa-0a49-7c1d94a304dd",
                "name": "EnrikaCharleen"
            }]
        }, {
            "id": "06781a8f-3a85-8839-3d27-31b9a647f712",
            "horses": [{
                "id": "9787628b-05bc-6116-e471-6af220a0c877",
                "name": "LianneGore"
            }]
        }, {
            "id": "c528d345-1279-33ee-77a6-a27cdc43159c",
            "horses": [{
                "id": "8ec3896a-48c1-a36c-edda-34a95331ec26",
                "name": "ArdelleLoy"
            }, {
                "id": "77cb0c64-94c9-add4-586c-0b24fb37d471",
                "name": "ErminieDulsea"
            }]
        }, {
            "id": "643e011c-acb9-1194-8a88-9c5a34478030",
            "horses": [{
                "id": "a0aeb85c-496a-c2c0-5f2d-320298641071",
                "name": "JerrieFredel"
            }]
        }, {
            "id": "44a4f435-0855-32f4-676d-40b49251cd48",
            "horses": [{
                "id": "78871cf2-0121-f4f3-9d4d-69fd09abd271",
                "name": "DaileMosier"
            }]
        }, {
            "id": "1492c01c-02ef-5fbd-1c04-aa5440912aad",
            "horses": [{
                "id": "29217d68-2cef-c8bf-c9f3-9fe14672f854",
                "name": "ShirleneWahkuna"
            }]
        }]
    }];
}