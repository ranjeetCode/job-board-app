import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { getCompany } from '../lib/graphql/queries';

function CompanyPage() {
  const { companyId } = useParams();
  const [company, setCompany] = useState();
  useEffect(()=>{
    getCompany(companyId).then(setCompany);
  }, [companyId])
  console.log('[companyPage] company:', company);
  if(!company){
    return <div>Loading....</div>
  }
  return (
    <div>
      <h1 className="title">
        {company.name}
      </h1>
      <div className="box">
        {company.description}
      </div>
    </div>
  );
}

export default CompanyPage;
