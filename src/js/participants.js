app.controller('ParticipantsCtrl', function () {
    this.people = [{
        type: "художники",
        persons: [
            {
                name: "Иван Голиков",
                pic: "",
                about: "Художник-миниатюрист, заслуженный деятель искусств РСФСР, " +
                "непосредственный инициатор и учредитель Артели древней живописи Палеха 4-5 декабря 1924 года"
            },
            {
                name: "Павел Корин",
                pic: "",
                about: "Живописец, монументалист, мастер портрета, педагог, профессор. Академик АХ СССР. " +
                "Народный художник СССР. Лауреат Ленинской и Сталинской премии второй степени."
            },
            {
                name: "Николай Дыдыкин",
                pic: "",
                about: "советский скульптор, в юности — палехский иконописец; много лет жил и работал в Ленинграде. " +
                "Заслуженный деятель искусств РСФСР. Работы скульптора неоднократно завоёвывали призы на международных конкурсах."
            }
        ]
    },
        {
            type: "музыканты",
            persons: [
                {
                    name: "Buzz Compass",
                    pic: "",
                    about: "Buzz Compass — творческий псевдоним диджея, а также диско- и хаус-продюсера Андрея Быченкова. " +
                    "Издает виниловые релизы на уважаемых международных лейблах, гастролирует по России и соседним странам."
                },
                {
                    name: "DR",
                    pic: "",
                    about: "Дмитрий Дээр — коллекционер и соулфул продюсер. Озвучивал фотовыставки, играл на фестивалях и различных арт-площадках."
                }
                ,
                {
                    name: "Олег Лёгкий",
                    pic: "",
                    about: "Это история не про то, как стать известным в одночасье, написав 9-ти минутный альбом, " +
                    "и не про то, как собрать 30000 лайков за 2 дня, или полный московский клуб «16 тонн» – " +
                    "это про самые искренние песни последних нескольких лет."
                }
            ]
        },
        {
            type: "лекторий",
            persons: [
                {
                    name: "Иван Хафизов",
                    pic: "",
                    about: "Прекрасный фотограф. Случайно сфотографировал первый наличник в 2007 году. " +
                    "Объездил 100 (на самом деле больше) городов и собрал обширную коллекцию фотографий наличников. " +
                    "Создал Виртуальный музей Nalichniki.com и готовит к выходу Путеводитель по наличникам центрального региона."
                }
            ]
        }]
});
