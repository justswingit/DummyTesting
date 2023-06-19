import             React   from 'react'           ;
import   *    as AiIcons   from 'react-icons/ai'  ;
// import   *    as DvIcons   from 'react-icons/di' ;
//import   *    as GiIcons   from 'react-icons/gi'  ;
//import   *    as TbIcons   from 'react-icons/tb'  ;
import   *    as SiIcons   from 'react-icons/si'  ;
import   *    as BsIcons   from 'react-icons/bs'  ;

const SidebarData = [
    {title: "Home",        path: '/',           icon: <AiIcons.AiFillHome/>,               cName: "nav-text"},
    {title: "Portfolio",   path:  "/Portfolio", icon:  <BsIcons.BsFillFileRichtextFill />, cName: "nav-text"},
  //{title: "Physics",     path:  "/Physics",   icon:  <DvIcons.DiAtom />,                 cName: "nav-text"},
  //{title: "Mathematics", path:  "/Math",      icon:  <TbIcons.TbMathIntegralX />,        cName: "nav-text"},
  //{title: "Music",       path:  "/Music",     icon:  <GiIcons.GiGuitarBassHead />,       cName: "nav-text"},
  //{title: "Blog",        path:  "/Blog",      icon:  <BsIcons.BsPersonVideo2 />,         cName: "nav-text"},
    {title: "About",       path:  "/About",     icon:  <SiIcons.SiAboutdotme />,           cName: "nav-text"},
]

export default SidebarData