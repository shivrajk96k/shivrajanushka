export type BookCategory = "mathematics" | "physics" | "chemistry";

export interface Book {
  id: string;
  title: string;
  author: string;
  category: BookCategory;
  pages: number;
  price: number;
  description: string;
  coverColor: string;
  isFree?: boolean;
  externalUrl?: string;
}

const PRICE_PER_PAGE = 0.5; // ₹0.50 per page

export function calculatePrice(pages: number): number {
  return Math.round(pages * PRICE_PER_PAGE);
}

const mathBooks: Book[] = [
  { id: "m1", title: "Calculus: Early Transcendentals", author: "James Stewart", category: "mathematics", pages: 1368, price: calculatePrice(1368), description: "The definitive guide to calculus with comprehensive examples.", coverColor: "from-violet-600 to-purple-800" },
  { id: "m2", title: "Linear Algebra Done Right", author: "Sheldon Axler", category: "mathematics", pages: 352, price: calculatePrice(352), description: "A rigorous yet accessible approach to linear algebra.", coverColor: "from-indigo-600 to-violet-800" },
  { id: "m3", title: "Introduction to Probability", author: "Joseph Blitzstein", category: "mathematics", pages: 596, price: calculatePrice(596), description: "Probability theory made intuitive and practical.", coverColor: "from-purple-600 to-fuchsia-800" },
  { id: "m4", title: "Abstract Algebra", author: "David Dummit", category: "mathematics", pages: 944, price: calculatePrice(944), description: "Comprehensive introduction to modern abstract algebra.", coverColor: "from-violet-700 to-indigo-900" },
  { id: "m5", title: "Real Analysis", author: "Walter Rudin", category: "mathematics", pages: 342, price: calculatePrice(342), description: "The classic text on mathematical analysis.", coverColor: "from-purple-500 to-violet-700" },
  { id: "m6", title: "Topology", author: "James Munkres", category: "mathematics", pages: 537, price: calculatePrice(537), description: "Comprehensive introduction to point-set and algebraic topology.", coverColor: "from-indigo-500 to-purple-700" },
  { id: "m7", title: "Discrete Mathematics", author: "Kenneth Rosen", category: "mathematics", pages: 1072, price: calculatePrice(1072), description: "Essential discrete math for computer science.", coverColor: "from-violet-600 to-purple-800" },
  { id: "m8", title: "Number Theory", author: "George Andrews", category: "mathematics", pages: 288, price: calculatePrice(288), description: "Classical introduction to number theory concepts.", coverColor: "from-purple-600 to-indigo-800" },
  { id: "m9", title: "Differential Equations", author: "Dennis Zill", category: "mathematics", pages: 664, price: calculatePrice(664), description: "Modern approach to differential equations.", coverColor: "from-fuchsia-600 to-purple-800" },
  { id: "m10", title: "Complex Analysis", author: "Lars Ahlfors", category: "mathematics", pages: 336, price: calculatePrice(336), description: "Classical text on complex variable theory.", coverColor: "from-violet-500 to-indigo-700" },
  { id: "m11", title: "Graph Theory", author: "Reinhard Diestel", category: "mathematics", pages: 447, price: calculatePrice(447), description: "Modern graph theory with elegant proofs.", coverColor: "from-purple-700 to-violet-900" },
  { id: "m12", title: "Combinatorics", author: "Richard Stanley", category: "mathematics", pages: 468, price: calculatePrice(468), description: "Enumerative combinatorics volume one.", coverColor: "from-indigo-600 to-purple-800" },
];

const physicsBooks: Book[] = [
  { id: "p1", title: "Fundamentals of Physics", author: "Halliday & Resnick", category: "physics", pages: 1328, price: calculatePrice(1328), description: "The gold standard introductory physics text.", coverColor: "from-blue-600 to-cyan-800" },
  { id: "p2", title: "Classical Mechanics", author: "John Taylor", category: "physics", pages: 786, price: calculatePrice(786), description: "Masterful treatment of Newtonian mechanics.", coverColor: "from-cyan-600 to-blue-800" },
  { id: "p3", title: "Introduction to Electrodynamics", author: "David Griffiths", category: "physics", pages: 623, price: calculatePrice(623), description: "Beloved textbook on electromagnetic theory.", coverColor: "from-blue-500 to-indigo-700" },
  { id: "p4", title: "Quantum Mechanics", author: "David Griffiths", category: "physics", pages: 508, price: calculatePrice(508), description: "Accessible introduction to quantum physics.", coverColor: "from-indigo-600 to-blue-800" },
  { id: "p5", title: "Thermodynamics", author: "Enrico Fermi", category: "physics", pages: 160, price: calculatePrice(160), description: "Concise and elegant thermodynamics primer.", coverColor: "from-teal-600 to-cyan-800" },
  { id: "p6", title: "Special Relativity", author: "A.P. French", category: "physics", pages: 286, price: calculatePrice(286), description: "Clear introduction to Einstein's special theory.", coverColor: "from-blue-700 to-violet-900" },
  { id: "p7", title: "Optics", author: "Eugene Hecht", category: "physics", pages: 714, price: calculatePrice(714), description: "Comprehensive coverage of modern optics.", coverColor: "from-cyan-500 to-blue-700" },
  { id: "p8", title: "Nuclear Physics", author: "Kenneth Krane", category: "physics", pages: 845, price: calculatePrice(845), description: "Modern nuclear physics text.", coverColor: "from-blue-600 to-teal-800" },
  { id: "p9", title: "Solid State Physics", author: "Charles Kittel", category: "physics", pages: 704, price: calculatePrice(704), description: "Classic solid state physics textbook.", coverColor: "from-indigo-500 to-blue-700" },
  { id: "p10", title: "Astrophysics", author: "Bradley Carroll", category: "physics", pages: 896, price: calculatePrice(896), description: "Modern astrophysics from stars to cosmology.", coverColor: "from-violet-600 to-blue-800" },
  { id: "p11", title: "Particle Physics", author: "Martin & Shaw", category: "physics", pages: 554, price: calculatePrice(554), description: "Introduction to particle physics concepts.", coverColor: "from-blue-600 to-indigo-800" },
  { id: "p12", title: "Statistical Mechanics", author: "Daniel Schroeder", category: "physics", pages: 422, price: calculatePrice(422), description: "Thermal physics with clarity and depth.", coverColor: "from-cyan-600 to-indigo-800" },
];

const chemistryBooks: Book[] = [
  { id: "c1", title: "Organic Chemistry", author: "Clayden et al.", category: "chemistry", pages: 1264, price: calculatePrice(1264), description: "The most comprehensive organic chemistry text.", coverColor: "from-emerald-600 to-teal-800" },
  { id: "c2", title: "Inorganic Chemistry", author: "Shriver & Atkins", category: "chemistry", pages: 878, price: calculatePrice(878), description: "Modern inorganic chemistry textbook.", coverColor: "from-teal-600 to-emerald-800" },
  { id: "c3", title: "Physical Chemistry", author: "Peter Atkins", category: "chemistry", pages: 1085, price: calculatePrice(1085), description: "The definitive physical chemistry resource.", coverColor: "from-green-600 to-teal-800" },
  { id: "c4", title: "Analytical Chemistry", author: "Gary Christian", category: "chemistry", pages: 828, price: calculatePrice(828), description: "Comprehensive analytical methods coverage.", coverColor: "from-emerald-500 to-green-700" },
  { id: "c5", title: "Biochemistry", author: "Jeremy Berg", category: "chemistry", pages: 1120, price: calculatePrice(1120), description: "Essential biochemistry for life sciences.", coverColor: "from-teal-500 to-emerald-700" },
  { id: "c6", title: "Quantum Chemistry", author: "Ira Levine", category: "chemistry", pages: 720, price: calculatePrice(720), description: "Quantum mechanics applied to chemistry.", coverColor: "from-green-700 to-teal-900" },
  { id: "c7", title: "Polymer Chemistry", author: "Paul Hiemenz", category: "chemistry", pages: 587, price: calculatePrice(587), description: "Introduction to polymer science.", coverColor: "from-emerald-600 to-green-800" },
  { id: "c8", title: "Environmental Chemistry", author: "Stanley Manahan", category: "chemistry", pages: 783, price: calculatePrice(783), description: "Chemistry of the environment explained.", coverColor: "from-teal-600 to-green-800" },
  { id: "c9", title: "Medicinal Chemistry", author: "Graham Patrick", category: "chemistry", pages: 752, price: calculatePrice(752), description: "Drug design and pharmaceutical chemistry.", coverColor: "from-green-600 to-emerald-800" },
  { id: "c10", title: "Electrochemistry", author: "Allen Bard", category: "chemistry", pages: 864, price: calculatePrice(864), description: "Principles and applications of electrochemistry.", coverColor: "from-emerald-700 to-teal-900" },
  { id: "c11", title: "Spectroscopy", author: "Donald Pavia", category: "chemistry", pages: 496, price: calculatePrice(496), description: "Introduction to spectroscopic methods.", coverColor: "from-teal-500 to-green-700" },
  { id: "c12", title: "Chemical Kinetics", author: "Keith Laidler", category: "chemistry", pages: 568, price: calculatePrice(568), description: "Reaction rates and mechanisms.", coverColor: "from-green-500 to-emerald-700" },
];

export const allBooks: Book[] = [...mathBooks, ...physicsBooks, ...chemistryBooks];

export const openResources = [
  { name: "OpenStax", url: "https://openstax.org", description: "Free peer-reviewed textbooks", icon: "📚" },
  { name: "MIT OpenCourseWare", url: "https://ocw.mit.edu", description: "MIT's complete course materials", icon: "🎓" },
  { name: "Khan Academy", url: "https://khanacademy.org", description: "Free world-class education", icon: "🏫" },
  { name: "arXiv.org", url: "https://arxiv.org", description: "Open access research papers", icon: "📄" },
  { name: "Project Gutenberg", url: "https://gutenberg.org", description: "Free public domain eBooks", icon: "📖" },
  { name: "NCERT Books", url: "https://ncert.nic.in/textbook.php", description: "Free Indian curriculum textbooks", icon: "🇮🇳" },
];

export const categoryInfo: Record<BookCategory, { label: string; icon: string; gradient: string }> = {
  mathematics: { label: "Mathematics", icon: "∑", gradient: "from-violet-500 to-purple-700" },
  physics: { label: "Physics", icon: "⚛", gradient: "from-blue-500 to-indigo-700" },
  chemistry: { label: "Chemistry", icon: "🧪", gradient: "from-emerald-500 to-teal-700" },
};
