import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import QuestionMarkSharpIcon from '@mui/icons-material/QuestionMarkSharp';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';

export const links = [
  {
    id: 1,
    text: "Main",
    href: "/",
    icon: <HomeSharpIcon />,
  },
  {
    id: 2,
    text: "About me",
    href: "/aboutme",
    icon: <QuestionMarkSharpIcon />,
  },
  {
    id: 3,
    text: "Contact",
    href: "/contact",
    icon: <EmailSharpIcon />,
  },
];