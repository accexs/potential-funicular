import PlayIcon from "@/components/Icons/PlayIcon";
import PlusIcon from "@/components/Icons/PlusIcon";
import Image from "next/image";
import Dropdown from "@/components/Dropdown";
import bkgImage from "@images/bkg-example.png"
import ContentCard from "@/components/ContentCard";
import AddContent from "../components/AddContent";

const contentList = {
    "page": 1,
    "results": [
        {
            "adult": false,
            "backdrop_path": "/sJA8Nnnj547WTFwqHYNu0Y8BxHM.jpg",
            "genre_ids": [
                28,
                12,
                16,
                35,
                10751
            ],
            "id": 1011985,
            "original_language": "en",
            "original_title": "Kung Fu Panda 4",
            "overview": "Po is gearing up to become the spiritual leader of his Valley of Peace, but also needs someone to take his place as Dragon Warrior. As such, he will train a new kung fu practitioner for the spot and will encounter a villain called the Chameleon who conjures villains from the past.",
            "popularity": 5846.243,
            "poster_path": "/wkfG7DaExmcVsGLR4kLouMwxeT5.jpg",
            "release_date": "2024-03-02",
            "title": "Kung Fu Panda 4",
            "video": false,
            "vote_average": 6.909,
            "vote_count": 204
        },
        {
            "adult": false,
            "backdrop_path": "/deLWkOLZmBNkm8p16igfapQyqeq.jpg",
            "genre_ids": [
                9648,
                14,
                28,
                12
            ],
            "id": 763215,
            "original_language": "en",
            "original_title": "Damsel",
            "overview": "A young woman's marriage to a charming prince turns into a fierce fight for survival when she's offered up as a sacrifice to a fire-breathing dragon.",
            "popularity": 1653.319,
            "poster_path": "/sMp34cNKjIb18UBOCoAv4DpCxwY.jpg",
            "release_date": "2024-03-08",
            "title": "Damsel",
            "video": false,
            "vote_average": 7.213,
            "vote_count": 981
        },
        {
            "adult": false,
            "backdrop_path": "/oFAukXiMPrwLpbulGmB5suEZlrm.jpg",
            "genre_ids": [
                28,
                12,
                878,
                14,
                18
            ],
            "id": 624091,
            "original_language": "id",
            "original_title": "Sri Asih",
            "overview": "Alana discover the truth about her origin: she’s not an ordinary human being. She may be the gift for humanity and become its protector as Sri Asih. Or a destruction, if she can’t control her anger.",
            "popularity": 1288.752,
            "poster_path": "/wShcJSKMFg1Dy1yq7kEZuay6pLS.jpg",
            "release_date": "2022-11-17",
            "title": "Sri Asih",
            "video": false,
            "vote_average": 6.4,
            "vote_count": 36
        },
        {
            "adult": false,
            "backdrop_path": "/mDeUmPe4MF35WWlAqj4QFX5UauJ.jpg",
            "genre_ids": [
                28,
                27,
                53
            ],
            "id": 1096197,
            "original_language": "pt",
            "original_title": "No Way Up",
            "overview": "Characters from different backgrounds are thrown together when the plane they're travelling on crashes into the Pacific Ocean. A nightmare fight for survival ensues with the air supply running out and dangers creeping in from all sides.",
            "popularity": 1077.494,
            "poster_path": "/hu40Uxp9WtpL34jv3zyWLb5zEVY.jpg",
            "release_date": "2024-01-18",
            "title": "No Way Up",
            "video": false,
            "vote_average": 6.131,
            "vote_count": 256
        },
        {
            "adult": false,
            "backdrop_path": "/xvk5AhfhgQcTuaCQyq3XqAnhEma.jpg",
            "genre_ids": [
                28,
                12,
                35
            ],
            "id": 848538,
            "original_language": "en",
            "original_title": "Argylle",
            "overview": "When the plots of reclusive author Elly Conway's fictional espionage novels begin to mirror the covert actions of a real-life spy organization, quiet evenings at home become a thing of the past. Accompanied by her cat Alfie and Aiden, a cat-allergic spy, Elly races across the world to stay one step ahead of the killers as the line between Conway's fictional world and her real one begins to blur.",
            "popularity": 936.803,
            "poster_path": "/95VlSEfLMqeX36UVcHJuNlWEpwf.jpg",
            "release_date": "2024-01-31",
            "title": "Argylle",
            "video": false,
            "vote_average": 6.152,
            "vote_count": 648
        },
        {
            "adult": false,
            "backdrop_path": "/zAepSrO99owYwQqi0QG2AS0dHXw.jpg",
            "genre_ids": [
                28,
                14
            ],
            "id": 634492,
            "original_language": "en",
            "original_title": "Madame Web",
            "overview": "Forced to confront revelations about her past, paramedic Cassandra Webb forges a relationship with three young women destined for powerful futures...if they can all survive a deadly present.",
            "popularity": 1634.571,
            "poster_path": "/rULWuutDcN5NvtiZi4FRPzRYWSh.jpg",
            "release_date": "2024-02-14",
            "title": "Madame Web",
            "video": false,
            "vote_average": 5.506,
            "vote_count": 595
        },
        {
            "adult": false,
            "backdrop_path": "/oBIQDKcqNxKckjugtmzpIIOgoc4.jpg",
            "genre_ids": [
                28,
                53,
                10752
            ],
            "id": 969492,
            "original_language": "en",
            "original_title": "Land of Bad",
            "overview": "When a Delta Force special ops mission goes terribly wrong, Air Force drone pilot Reaper has 48 hours to remedy what has devolved into a wild rescue operation. With no weapons and no communication other than the drone above, the ground mission suddenly becomes a full-scale battle when the team is discovered by the enemy.",
            "popularity": 922.843,
            "poster_path": "/h3jYanWMEJq6JJsCopy1h7cT2Hs.jpg",
            "release_date": "2024-01-25",
            "title": "Land of Bad",
            "video": false,
            "vote_average": 7.031,
            "vote_count": 367
        },
        {
            "adult": false,
            "backdrop_path": "/cu5Qk2QHxOyyMrD3Bq93DxgmJer.jpg",
            "genre_ids": [
                28,
                80
            ],
            "id": 1046090,
            "original_language": "zh",
            "original_title": "周處除三害",
            "overview": "The arrogant, third most-wanted criminal in Taiwan, decides to get rid of the top two competitors and crowns himself the most-wanted criminal before dying.",
            "popularity": 831.237,
            "poster_path": "/7IJ7F8tX7IAkpUdaGovOBJqORnJ.jpg",
            "release_date": "2023-10-06",
            "title": "The Pig, the Snake and the Pigeon",
            "video": false,
            "vote_average": 7.5,
            "vote_count": 95
        },
        {
            "adult": false,
            "backdrop_path": "/47olX0FCvUCfAqlp8cK0O5fKLav.jpg",
            "genre_ids": [
                16,
                35,
                878
            ],
            "id": 1239251,
            "original_language": "en",
            "original_title": "Megamind vs. the Doom Syndicate",
            "overview": "Megamind's former villain team, The Doom Syndicate, has returned. Our newly crowned blue hero must now keep up evil appearances until he can assemble his friends (Roxanne, Ol' Chum and Keiko) to stop his former evil teammates from launching Metro City to the Moon.",
            "popularity": 774.747,
            "poster_path": "/yRZfiG1QpRkBc7fAmxfcR7Md5EC.jpg",
            "release_date": "2024-03-01",
            "title": "Megamind vs. the Doom Syndicate",
            "video": false,
            "vote_average": 5.714,
            "vote_count": 126
        },
        {
            "adult": false,
            "backdrop_path": "/87IVlclAfWL6mdicU1DDuxdwXwe.jpg",
            "genre_ids": [
                878,
                12
            ],
            "id": 693134,
            "original_language": "en",
            "original_title": "Dune: Part Two",
            "overview": "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, Paul endeavors to prevent a terrible future only he can foresee.",
            "popularity": 856.484,
            "poster_path": "/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
            "release_date": "2024-02-27",
            "title": "Dune: Part Two",
            "video": false,
            "vote_average": 8.386,
            "vote_count": 1926
        },
        {
            "adult": false,
            "backdrop_path": "/ekRp1sEA8pnuzVHQkUESTgNSKdW.jpg",
            "genre_ids": [
                878,
                28,
                80
            ],
            "id": 932420,
            "original_language": "en",
            "original_title": "Code 8 Part II",
            "overview": "In a world where superpowered people are heavily policed by robots, an ex-con teams up with a drug lord he despises to protect a teen from a corrupt cop.",
            "popularity": 740.7,
            "poster_path": "/hhvMTxlTZtnCOe7YFhod9uz3m37.jpg",
            "release_date": "2024-02-27",
            "title": "Code 8 Part II",
            "video": false,
            "vote_average": 6.559,
            "vote_count": 312
        },
        {
            "adult": false,
            "backdrop_path": "/gklkxY0veMajdCiGe6ggsh07VG2.jpg",
            "genre_ids": [
                16,
                28,
                12,
                35,
                10751
            ],
            "id": 940551,
            "original_language": "en",
            "original_title": "Migration",
            "overview": "After a migrating duck family alights on their pond with thrilling tales of far-flung places, the Mallard family embarks on a family road trip, from New England, to New York City, to tropical Jamaica.",
            "popularity": 744.562,
            "poster_path": "/ldfCF9RhR40mppkzmftxapaHeTo.jpg",
            "release_date": "2023-12-06",
            "title": "Migration",
            "video": false,
            "vote_average": 7.57,
            "vote_count": 959
        },
        {
            "adult": false,
            "backdrop_path": "/4Ep2KivIBUZbkS7kHjW7Qywnhhj.jpg",
            "genre_ids": [
                28
            ],
            "id": 1049948,
            "original_language": "en",
            "original_title": "Vikings: Battle of Heirs",
            "overview": "A young Viking must come to terms with the realization that he may be the King's son, who was switched at birth, but not before others try to take his rightful place.",
            "popularity": 694.394,
            "poster_path": "/87goLbbqrJqAxqDS5cBsik1zKT.jpg",
            "release_date": "2023-04-28",
            "title": "Vikings: Battle of Heirs",
            "video": false,
            "vote_average": 7.75,
            "vote_count": 4
        },
        {
            "adult": false,
            "backdrop_path": "/i7nnmCTnjK50vNqbMfVtmoVULWJ.jpg",
            "genre_ids": [
                28
            ],
            "id": 1081620,
            "original_language": "en",
            "original_title": "The Weapon",
            "overview": "Dallas is a one-man killing machine on a mysterious rampage. His attacks on biker gangs and meth labs anger the Vegas mob boss who’s holding Dallas’ girlfriend hostage. But who is Dallas working for? Even torture won’t make him talk, and he won’t stop until justice is served.",
            "popularity": 666.868,
            "poster_path": "/slQYCDzCMM8SBh9Xa3aPeM2fekA.jpg",
            "release_date": "2023-02-17",
            "title": "The Weapon",
            "video": false,
            "vote_average": 5.382,
            "vote_count": 17
        },
        {
            "adult": false,
            "backdrop_path": "/bQS43HSLZzMjZkcHJz4fGc7fNdz.jpg",
            "genre_ids": [
                878,
                10749,
                35
            ],
            "id": 792307,
            "original_language": "en",
            "original_title": "Poor Things",
            "overview": "Brought back to life by an unorthodox scientist, a young woman runs off with a debauched lawyer on a whirlwind adventure across the continents. Free from the prejudices of her times, she grows steadfast in her purpose to stand for equality and liberation.",
            "popularity": 676.715,
            "poster_path": "/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg",
            "release_date": "2023-12-07",
            "title": "Poor Things",
            "video": false,
            "vote_average": 7.861,
            "vote_count": 2500
        },
        {
            "adult": false,
            "backdrop_path": "/nTPFkLUARmo1bYHfkfdNpRKgEOs.jpg",
            "genre_ids": [
                35,
                10749
            ],
            "id": 1072790,
            "original_language": "en",
            "original_title": "Anyone But You",
            "overview": "After an amazing first date, Bea and Ben’s fiery attraction turns ice cold — until they find themselves unexpectedly reunited at a destination wedding in Australia. So they do what any two mature adults would do: pretend to be a couple.",
            "popularity": 557.666,
            "poster_path": "/5qHoazZiaLe7oFBok7XlUhg96f2.jpg",
            "release_date": "2023-12-21",
            "title": "Anyone But You",
            "video": false,
            "vote_average": 7.068,
            "vote_count": 1050
        },
        {
            "adult": false,
            "backdrop_path": "/nb3xI8XI3w4pMVZ38VijbsyBqP4.jpg",
            "genre_ids": [
                18,
                36
            ],
            "id": 872585,
            "original_language": "en",
            "original_title": "Oppenheimer",
            "overview": "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
            "popularity": 566.527,
            "poster_path": "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
            "release_date": "2023-07-19",
            "title": "Oppenheimer",
            "video": false,
            "vote_average": 8.114,
            "vote_count": 7278
        },
        {
            "adult": false,
            "backdrop_path": "/yyFc8Iclt2jxPmLztbP617xXllT.jpg",
            "genre_ids": [
                35,
                10751,
                14
            ],
            "id": 787699,
            "original_language": "en",
            "original_title": "Wonka",
            "overview": "Willy Wonka – chock-full of ideas and determined to change the world one delectable bite at a time – is proof that the best things in life begin with a dream, and if you’re lucky enough to meet Willy Wonka, anything is possible.",
            "popularity": 542.451,
            "poster_path": "/qhb1qOilapbapxWQn9jtRCMwXJF.jpg",
            "release_date": "2023-12-06",
            "title": "Wonka",
            "video": false,
            "vote_average": 7.203,
            "vote_count": 2589
        },
        {
            "adult": false,
            "backdrop_path": "/hIUs8RzKlrzgbWxn2EpWmiTFqCc.jpg",
            "genre_ids": [
                878,
                53
            ],
            "id": 870404,
            "original_language": "en",
            "original_title": "Meteor",
            "overview": "After a meteor collides into Earth, a lonely rancher and a lost young girl are on the run from vicious mercenaries.",
            "popularity": 471.63,
            "poster_path": "/tVMddOS5bi3YPVPgTPlEw0TOWoF.jpg",
            "release_date": "2021-09-01",
            "title": "Meteor",
            "video": false,
            "vote_average": 5.452,
            "vote_count": 83
        },
        {
            "adult": false,
            "backdrop_path": "/lzWHmYdfeFiMIY4JaMmtR7GEli3.jpg",
            "genre_ids": [
                878,
                12
            ],
            "id": 438631,
            "original_language": "en",
            "original_title": "Dune",
            "overview": "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanity's greatest potential-only those who can conquer their fear will survive.",
            "popularity": 488.924,
            "poster_path": "/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
            "release_date": "2021-09-15",
            "title": "Dune",
            "video": false,
            "vote_average": 7.79,
            "vote_count": 10854
        }
    ],
    "total_pages": 43125,
    "total_results": 862485
}

export default function Home() {
    return (
        <main className="px-6 text-white uppercase pb-12">
            <AddContent/>
            <div className="flex flex-col">
                <div className="absolute inset-0 z-0 h-[85vh]">
                    <Image
                        fill={true}
                        src={`https://image.tmdb.org/t/p/original/${contentList.results[0].backdrop_path}`}
                        // src={bkgImage}
                        alt="poster"
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brandGray h-[86vh]"/>
                </div>
                <div className="flex flex-col text-center px-2 gap-6 items-center z-10 h-[95vh] justify-end">
                    <div className="flex flex-col gap-4 pb-4">
                        <div className="font-thin">
                            <h2>Original de <span className="font-bold">liteflix</span></h2>
                        </div>
                        <div className="text-6xl text-brandGreen tracking-wider">{contentList.results[0].title}</div>
                        {/*<div className="text-6xl text-brandGreen tracking-wider">La Casa de Papel</div>*/}
                    </div>
                    <div className="flex flex-col items-center gap-4 font-thin w-60">
                        <button className="uppercase bg-brandGray h-12 w-full">
                            <div className="flex items-center justify-center gap-2">
                                <PlayIcon/> Reproducir
                            </div>
                        </button>
                        <button className="uppercase bg-brandGray bg-opacity-50 h-12 border border-gray-400 w-full">
                            <div className="flex items-center justify-center gap-2">
                                <PlusIcon/> Mi lista
                            </div>
                        </button>
                        <div className="mt-8">
                            <Dropdown/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-6 mt-4">
                    {
                        contentList.results.slice(1, 5).map((content) => {
                            return (
                                <div key={content.id} className="w-full h-44">
                                    <ContentCard title={content.title}
                                                 img={`https://image.tmdb.org/t/p/original/${content.backdrop_path}`}
                                                 year={content.release_date.slice(0, 4)}
                                                 rating={content.vote_average.toPrecision(2)}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </main>
    );
}
