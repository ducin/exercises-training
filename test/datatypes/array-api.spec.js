import db from '../../data/data';

describe('Array API', () => {
	// database is defined in data/data.js file
	const employees = db.getEmployees();
	const projects = db.getProjects();

	describe('simple scenarios', () => {

		it('calculate simple scenario - imperatively', () => {
			// calculate total amount of bonus
			// given to all employees with nationality equal "DE"
			// whose salary is below 5000
			// where bonus equals 20% of the salary

			// use FOR loops
			let totalBonus;
			// for(...; ...; ...)

			expect(totalBonus).toEqual(42499);
		})

		it('calculate simple scenario - Array API', () => {
			// calculate total amount of bonus
			// given to all employees with nationality equal "DE"
			// whose salary is below 5000
			// where bonus equals 20% of the salary

			// use functional programming
			let totalBonus;
			// = employees
			// .filter(...)
			// .map(...)
			// .reduce(...)

			expect(totalBonus).toEqual(42499);
		})

		it('get the first element which satisfies a condition/predicate', () => {
			// fetch the employee with ID 651065
			let employee651065;
	
			expect(employee651065.id).toEqual(651065);
			expect(employee651065.firstName).toEqual("Marta");
			expect(employee651065.personalInfo.address.city).toEqual("Calista furt");
			expect(employee651065.personalInfo.phone).toEqual("(134) 899-1656");
	
			// fetch a employee with nationality US
			let USEmployee;
	
			expect(USEmployee.nationality).toEqual("US");
		})
	
		it('get all elements which satisfy a condition/predicate', () => {
			// fetch all employees with nationality DE only
			let DEEmployees;
	
			expect(DEEmployees.length).toEqual(155);
			expect(DEEmployees[0].lastName).toEqual("Biesenbach");
			expect(DEEmployees[10].lastName).toEqual("Verniest");
			expect(DEEmployees[20].lastName).toEqual("Steding");
	
			// fetch all employees with gmail.com _personal_ email domain only
			let GmailEmployees;
	
			expect(GmailEmployees.length).toEqual(439);
			expect(GmailEmployees[0].lastName).toEqual("Kruszewski");
			expect(GmailEmployees[10].lastName).toEqual("Radecki");
			expect(GmailEmployees[20].lastName).toEqual("Benedetti");
		})

		it('reverse the lists', () => {
			let list3 = [3, 6, 12, 24, 36, 39, 51, 63];
			let list5 = [5, 15, 30, 40, 45, 55, 105];
		
			// reverse both arrays
			// but be careful - don't alter original arrays!
			let list3reversed;
			let list5reversed;
	
			expect(list3reversed).toEqual([63, 51, 39, 36, 24, 12, 6, 3]);
			expect(list3).toEqual([3, 6, 12, 24, 36, 39, 51, 63]);
			expect(list5reversed).toEqual([105, 55, 45, 40, 30, 15, 5]);
			expect(list5).toEqual([5, 15, 30, 40, 45, 55, 105]);
		})
	
		it('pick a single element', () => {
			let numbers = [{"val":2},{"val":3},{"val":8},{"val":1},{"val":33},{"val":76},{"val":13},{"val":32},{"val":13}];
	
			let maxValue; // = ...
			let minValue; // = ...
	
			expect(maxValue).toEqual({val: 76});
			expect(minValue).toEqual({val: 1});
		})

		it('flatten an array', () => {
			var arr1 = [1, 2, 3]
			expect(arr1.flat()).toEqual(/* YOUR ANSWER HERE 😇 */)
		
			var arr2 = [1, [2], [3]]
			expect(arr2.flat()).toEqual(/* YOUR ANSWER HERE 😇 */)
		
			var arr3 = [1, [[2], [3]]]
			expect(arr3.flat()).toEqual(/* YOUR ANSWER HERE 😇 */)
		})
		  
		it('flatten the product of mapping the array', () => {
			const numberAndHalf = x => [x, x + 0.5]
		
			// let's start with an ordinary [].map
			var arr = [1, 2, 3]
			expect(arr.map(numberAndHalf)).toEqual(/* YOUR ANSWER HERE 😇 */)
		
			var arr = [1, 2, 3]
			expect(arr.flatMap(numberAndHalf)).toEqual(/* YOUR ANSWER HERE 😇 */)
		
			// fix the following
			expect(arr.flatMap(numberAndHalf)).toEqual( arr.map(numberAndHalf) /* YOUR ANSWER HERE 😇 */ )
		})
	})

	describe('business domain scenarios', () => {

		it('should search for a single objects by maximum value among collection', () => {
			// fetch the phone to the richest employee who is American
			// or (gives the same result in this case)
			// fetch the phone to the richest American
			let RichestUSEmployeePhone;

			expect(RichestUSEmployeePhone).toEqual("623-711-7686 x7328");
		});

		it('should sort offices by how many employees work there', () => {
			// sort DESC the offices by how many employees work in the office
			
			// all offices within a country should be grouped together, example:
			// "office": [ "Lublin", "Poland" ]
			// "office": [ "Wrocław", "Poland" ]
			// "office": [ "Warszawa", "Poland" ]
			// all above fall into "Poland" group
			// e.office[1] == 'Poland

			// calculate `officesCountMap` here

			expect(sortedOffices).toEqual(['Poland', 'United States of America', 'United Kingdom', 'Germany', 'Italy', 'Netherlands', 'France', 'Spain'])
		})

		it('should list unique skills by project team', () => {
			// given projectID, determine what is the skillset of the project team
			// project team is all the members of the project, including the manager
			// 
			// you can either find collection elements manually
			// or you can use `db.getProjectById` and `db.getEmployeeById`

			// define `getProjectUniqueSkills` here

			const testcases = [{
				projectID: '86c0cd06-bd83-4d50-82d7-d1c10743ec48',
				expectedSkills: ['Java', 'scala', 'JVM', 'spring', 'Hibernate', 'C#', '.net', 'EntityFramework', 'IIS', 'VisualStudio', 'VSTS', 'algorithms', 'scrum', 'testing', 'management', 'JSP', 'sql', 'Oracle', 'SOA', 'MVC', 'Security', 'OData', 'JavaScript', 'TypeScript', 'rxjs', 'jQuery', 'CSS', 'HTML', 'MongoDB', 'CoffeeScript', 'Angular', 'AngularJS', 'react', 'data structures', 'marketing', 'digital marketing', 'email marketing', 'social media', 'Rx.net', 'neo4j'],
			}, {
				projectID: '8d6ee91f-607d-4cbe-8cf1-eb889c934678',
				expectedSkills: ['C#', '.net', 'EntityFramework', 'IIS', 'VisualStudio', 'VSTS', 'JavaScript', 'redux', 'jQuery', 'CSS', 'HTML', 'SOA', 'MVC', 'Security', 'data structures', 'scrum', 'testing', 'management', 'Scalability', 'OData', 'Rx.net', 'Java', 'spring', 'JSP', 'Hibernate', 'Angular', 'scala', 'JVM', 'TypeScript', 'AngularJS', 'sql', 'SQL Server', 'rxjs', 'F#', 'react', 'DDD', 'CoffeeScript'],
			}, {
				projectID: '6aa3c367-e8f6-43cc-9042-3c19594fadb6',
				expectedSkills: ['C#', '.net', 'IIS', 'VisualStudio', 'VSTS', 'JavaScript', 'TypeScript', 'redux', 'Angular', 'jQuery', 'CSS', 'HTML', 'data structures', 'scrum', 'testing', 'management', 'react', 'rxjs', 'algorithms', 'MVC', 'Scalability', 'Java', 'scala', 'JSP', 'OData', 'Rx.net', 'sql', 'spring', 'Hibernate', 'AngularJS', 'EntityFramework', 'JVM'],
			}]

			for (const { projectID, expectedSkills } of testcases){
				const uniqueSkills = getProjectUniqueSkills(projectID)
				expect(expectedSkills.length).toEqual(uniqueSkills.length)
				for (const skill of expectedSkills){			
					expect(uniqueSkills).toContain(skill)
				}
			}
		})

		it('should calculate average salary of all employees who have certain skill', () => {
			// calculate average salary among all employees who have certain skill
			// query entire employees collection
			// round the result to at most 2 decimal digits

			// define `averageSalaryBySkill` here

			expect(averageSalaryBySkill('C#')).toEqual(5415.39)
			expect(averageSalaryBySkill('EntityFramework')).toEqual(5442.93)
			expect(averageSalaryBySkill('TypeScript')).toEqual(5619.39)
			expect(averageSalaryBySkill('Oracle')).toEqual(5954.85)
		})

		it('should find most known skills', () => {
			// calculate how many employees known certain skills
			// and find the three most known skills (among all employee collection)

			expect($1stMostKnownSkill).toEqual({ skill: 'scrum', count: 756 })
			expect($2ndMostKnownSkill).toEqual({ skill: 'HTML', count: 715 })
			expect($3rdMostKnownSkill).toEqual({ skill: 'testing', count: 693 })
		})

		it('should find if anyone knows a skill within a project team', () => {
			// determine whether annyone within the project team
			// including the manager or not
			// know a certain skill

			// define `someoneKnowsSkill` here

			const testcases = [{
				projectID: 'fded698e-df3d-4483-9359-cfd8537d979f',
				skill: 'TypeScript',
				includingManager: true,
				result: true,
			}, {
				projectID: '3b1775dd-5291-465f-808c-2dbdaa085713',
				skill: 'marketing',
				includingManager: true,
				result: false,
			}, {
				projectID: '6aa3c367-e8f6-43cc-9042-3c19594fadb6',
				skill: 'OData',
				includingManager: false,
				result: true,
			}, {
				projectID: 'b7f64a59-a0d6-4805-a9a8-38fb37e57c6a',
				skill: 'F#',
				includingManager: false,
				result: false,
			}]

			for (const { projectID, skill, includingManager, result } of testcases){
				expect(someoneKnowsSkill({ projectID, skill, includingManager })).toEqual(result, `expected ${skill} to be ${!result && 'not ' }known`)
			}
		})

		it('should filter entities which are within a range', () => {
			// filter the entities of various collection
			// which have a given number property's value within a range
			// use GTE, LTE, instead of GT, LT

			// define `within` here

			expect(within(employees, 'salary', { from: 1000, to: 10000 }).length).toEqual(1310)
			expect(within(employees, 'salary', { from: 4000, to: 4100 }).length).toEqual(12)
			expect(within(employees, 'salary', { from: 9900, to: 10000 }).length).toEqual(23)

			expect(within(projects, 'budget', { from: 0, to: 100000 }).length).toEqual(0)
			expect(within(projects, 'budget', { from: 0, to: 1000000 }).length).toEqual(32)
			expect(within(projects, 'budget', { from: 0, to: 10000000 }).length).toEqual(56)
		})

	})
})
