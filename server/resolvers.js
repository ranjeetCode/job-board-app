import { getCompany } from './db/companies.js';
import { getJob, getJobs, getJobsByCompany } from './db/jobs.js';

export const resolvers = {
    Query: {
        company: (_root, {id}) => {
            return getCompany(id);
        },

        job: (_root, {id}) => {
            return getJob(id);
        },

       // jobs: () =>  getJobs()
        jobs: () => {
            return getJobs();
        },
    },

    Company: {
        jobs: (company) => getJobsByCompany(company.id)
    },

    Job: { 
        company : (job) => {
           return getCompany(job.companyId)
        },
        date: (job) => {
             return toIsoDate(job.createdAt);
        },
    }, 
};

function toIsoDate(value){
    return value.slice(0, 'yyyy-mm-dd' .length);
}