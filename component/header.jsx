// "use client";

// import Link from "next/link";
// import { IoIosMenu } from "react-icons/io";
// import { IoMdClose } from "react-icons/io";

// import { useState } from "react";

// function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   return (
//     <div className="fixed top-0 left-0 w-full z-50 bg-[#19183B] shadow-[10px_-2px_10px_rgba(255,255,255,0.1)]">
//       <div className="flex justify-between  items-center py-[25px] w-[90%] mx-auto">
//         {/* Logo section */}
//         <div className="bg-[#263849] w-[40px] relative lg:static   flex justify-center p-[5px] rounded rounded-3xl border border-[#3d9d91] border-3">
//           <Link className="text-[#3d9d91] font-bold font-sans" href="/">
//             SA
//           </Link>
//         </div>

//         {/*navbar section*/}

//         <div
//           className={` flex-col items-center gap-7 fixed inset-0
//             p-[10px] bg-black/70 lg:bg-transparent z-40 justify-center
//           lg:static lg:!flex lg:flex-row lg:justify-between lg:items-center lg:w-[50%] lg:ml-[30px] lg:p-[10px] lg:gap-0 ${
//             menuOpen ? "flex " : "hidden"
//           }`}
//         >
//           <Link
//             href="#about"
//             className="text-[#bbc6e5] font-sans font-semibold hover:text-[#3d9d91] text-sm"
//             onClick={() => setMenuOpen(false)}
//           >
//             About me
//           </Link>
//           <Link
//             href="#exp_pro"
//             onClick={() => setMenuOpen(false)}
//             className="text-[#bbc6e5] font-sans font-semibold hover:text-[#3d9d91] text-sm"
//           >
//             Project/Experience
//           </Link>
//           <Link
//             href="#contact"
//             onClick={() => setMenuOpen(false)}
//             className="text-[#bbc6e5] font-sans hover:text-[#3d9d91] font-semibold text-sm"
//           >
//             Contact
//           </Link>

//           <Link
//             href="https://docs.google.com/document/d/1puF6qj6JfFW5-YyK1m_jDcu_RmydaHwo/edit?usp=drive_link&ouid=105650029138463119659&rtpof=true&sd=true"
//             onClick={() => setMenuOpen(false)}
//             className=" border-1 border-[#3d9d91] w-[90px]  text-[#3d9d91] font-bold hover:scale-[1.05] transition-transform font-sans text-center text-sm p-[2px]"
//           >
//             Resume
//           </Link>
//         </div>

//         <div className="lg:hidden relative z-50 ">
//           {menuOpen ? (
//             <IoMdClose
//               onClick={() => setMenuOpen(false)}
//               className="text-[#3d9d91] text-3xl"
//             />
//           ) : (
//             <IoIosMenu
//               onClick={() => setMenuOpen(true)}
//               className="text-[#3d9d91] text-3xl"
//             />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header;





