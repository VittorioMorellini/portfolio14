"use client"
import {AtSymbolIcon, KeyIcon, ExclamationCircleIcon,} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from '../../app/(components)/button';
//import { useFormState, useFormStatus } from 'react-dom';
// import { authenticate } from '@/lib/actions';
//import { signIn } from 'next-auth/react';

// export default function LoginForm() {
//   const [code, action] = useFormState(authenticate, undefined);
  
//   return (
//     <form action={action} className="space-y-3">
//       <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
//         <h1 className={`mb-3 text-2xl`}>
//           Please log in to continue.
//         </h1>
//         <div className="w-full">
//           <div>
//             <label
//               className="mb-3 mt-5 block text-xs font-medium text-gray-900"
//               htmlFor="username"
//             >
//               Email
//             </label>
//             <div className="relative">
//               <input
//                 className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
//                 id="username"
//                 type="text"
//                 name="username"
//                 placeholder="Enter your username"
//                 required
//               />
//               <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
//             </div>
//           </div>
//           <div className="mt-4">
//             <label
//               className="mb-3 mt-5 block text-xs font-medium text-gray-900"
//               htmlFor="password"
//             >
//               Password
//             </label>
//             <div className="relative">
//               <input
//                 className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
//                 id="password"
//                 type="password"
//                 name="password"
//                 placeholder="Enter password"
//                 required
//                 minLength={6}
//               />
//               <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
//             </div>
//           </div>
//         </div>
//         <LoginButton />
//         <div className="flex h-8 items-end space-x-1">
//           {code === 'CredentialSignin' && (
//             <>
//               <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
//               <p aria-live="polite" className="text-sm text-red-500">
//                 Invalid credentials
//               </p>
//             </>
//           )}
//         </div>
//       </div>
//     </form>
//   );
// }

// function LoginButton() {
//   const { pending } = useFormStatus();
 
//   const handleSignIn = (ev: React.MouseEvent<HTMLButtonElement>) => {
//     console.log(`%chandleSignIn: callbackUrl: ${process.env.NEXT_PUBLIC_BASE_URL}`, 'color: magenta; font-size: 18px')
//     ev.preventDefault()
//     signIn('credentials', { callbackUrl: process.env.NEXT_PUBLIC_BASE_URL })
//   }
//   return (
//     <Button className="mt-4 w-full" aria-disabled={pending} onClick={handleSignIn}>
//       Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
//     </Button>
//   );
// }