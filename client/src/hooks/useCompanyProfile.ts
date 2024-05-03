import { useEffect, useState } from "react";

const useCompanyProfile = (): {
  banner: string;
  image: string;
  name: string;
  field: string;
  url: string;
  location: string;
  description: string;
  reasons: string[];
} => {
  const [banner, setBanner] = useState("");
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [field, setField] = useState("");
  const [url, setUrl] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [reasons, setReasons] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/getCompanyInfo", {
        credentials: "include",
      });

      const data = await res.json();
      const company = data.company;

      console.log(company.banner);
      console.log(company.image);

      setBanner(company.banner);
      setImage(company.image);
      setName(company.name);
      setField(company.field);
      setUrl(company.url);
      setLocation(company.location);
      setDescription(company.description);
      setReasons(company.reasons);
    };

    fetchData();
  }, []);

  return {
    banner,
    image,
    name,
    field,
    url,
    location,
    description,
    reasons,
  };
};

export default useCompanyProfile;
