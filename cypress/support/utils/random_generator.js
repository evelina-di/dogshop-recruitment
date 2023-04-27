/// <reference types="cypress" />

export class RandomGenerator {
	static Breed() {
		const breed = [
			"Labrador Retriever",
			"German Shepherd",
			"Golden Retriever",
			"Bulldog",
			"Beagle",
			"Poodle",
			"Yorkshire Terrier",
			"Dachshund",
			"Boxer",
			"Rottweiler",
			"Siberian Husky",
			"Doberman Pinscher",
			"Australian Shepherd",
			"Border Collie",
			"Shih Tzu",
			"Boston Terrier",
			"Bichon Frise",
			"Chihuahua",
			"Cavalier King Charles Spaniel",
			"Great Dane",
			"Greyhound",
			"Irish Setter",
			"Jack Russell Terrier",
			"Lhasa Apso",
			"Maltese",
			"Miniature Pinscher",
			"Newfoundland",
			"Old English Sheepdog",
			"Papillon",
			"Shar Pei",
			"Saint Bernard",
			"Scottish Terrier",
			"Staffordshire Bull Terrier",
			"Weimaraner",
			"Welsh Corgi",
			"West Highland White Terrier",
			"Afghan Hound",
			"American Eskimo Dog",
			"Basenji",
			"Bernese Mountain Dog",
			"Bloodhound",
			"Chow Chow",
			"Cocker Spaniel",
			"Collie",
			"Dalmatian",
			"English Springer Spaniel",
			"French Bulldog",
			"German Shorthaired Pointer",
			"Giant Schnauzer",
			"Gordon Setter",
			"Great Pyrenees",
			"Havanese",
			"Irish Wolfhound",
			"Italian Greyhound",
			"Keeshond",
			"Komondor",
			"Kuvasz",
			"Leonberger",
			"Miniature Schnauzer",
			"Norwegian Elkhound",
			"Pekingese",
			"Pharaoh Hound",
			"Pointer",
			"Rhodesian Ridgeback",
			"Samoyed",
			"Shetland Sheepdog",
			"Shiba Inu",
			"Standard Schnauzer",
			"Tibetan Mastiff",
			"Toy Poodle",
			"Vizsla",
			"Whippet",
			"Xoloitzcuintli",
			"Yorkshire Terrier",
			"Alaskan Malamute",
			"American Pit Bull Terrier",
			"Australian Cattle Dog",
			"Belgian Malinois",
			"Belgian Sheepdog",
			"Black Russian Terrier",
		];

		return breed[Math.floor(Math.random() * breed.length)];
	}

	static String() {
		let result = "";
		const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
		const charactersLength = characters.length;
		for (let i = 0; i < 10; i++) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		return result;
	}

	static StringNumber() {
		const number = Math.floor(Math.random() * 100);
		return number.toString();
	}

	static GetRandomDogUrl(breed) {
		const string = this.StringNumber();
    let dogUrl = "";

		return dogUrl = `https://randomurl.pl/${string}/${breed}`;
	}
}

export default RandomGenerator;
