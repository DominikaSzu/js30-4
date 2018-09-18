document.addEventListener('DOMContentLoaded', function(e) {

    const inventors = [
        { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
        { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
        { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
        { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
        { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
        { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
        { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
        { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
        { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
        { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
        { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
        { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];
    
    const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];
    
    // 1. Filter the list of inventors for those who were born in the 1500's
    
    const result1 = inventors.filter(inventor => (inventor.year > 1499 && inventor.year < 1600));
    
    console.table(result1);
    
    // 2. Give us an array of the inventors' first and last names
    
    const result2 = inventors.map(inventor => `${inventor.first} ${inventor.last}`);    

    console.table(result2);
    
    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest
    
    compareDates = (a,b) => {
        return a.year - b.year;
    }
    
    inventors.sort(compareDates);
    
    // Array.prototype.reduce()
    // 4. How many years did all the inventors live?

    yearsLivedSum = (acc, val) => {
    val = (val.passed - val.year);    
    acc += val
    return acc;
    };    

    let result3 = inventors.reduce(yearsLivedSum, 0);
    console.log(result3);
    
    // 5. Sort the inventors by years lived
 
    yearsLived = (a, b) => {
        return ((a.passed - a.year) - (b.passed - b.year));
    }
    
    inventors.sort(yearsLived);
    console.table(inventors);   
    
    
    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

//    let arrayOfStreets = Array.from(document.querySelectorAll('.mw-category-group a'));
//    
//    let newArrayOfStreets = arrayOfStreets.map(a => a.textContent);
//    let de = newArrayOfStreets.filter(a => a.includes('de'));
//        
    
    // 7. sort Exercise
    // Sort the people alphabetically by last name
    
//    let alphaSort = people.sort(function(a, b){
//        if (a > b) {
//            return 1;
//        } else {
//            return -1;
//        }
//    });
    
//    Sort alphabetically by names
    
    let nameSort = people.sort(function(name1, name2) {
        let name1a = name1.split(', ');
        let name2a = name2.split(', ');
        
        if (name1a[1] > name2a[1]) {
            return 1;
        } else {
            return -1;
        }
        
    })
    
    console.table(nameSort);

    
    // 8. Reduce Exercise
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

});