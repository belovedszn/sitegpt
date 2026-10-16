import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest { return { name:"Plinth", short_name:"Plinth", start_url:"/", display:"standalone", background_color:"#f4f0e8", theme_color:"#161614", icons:[{src:"/plinth-logo.png",sizes:"any",type:"image/png"}]};}
