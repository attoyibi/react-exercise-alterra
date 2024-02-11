// api.js
const API_URL = 'https://jqshvimwpekmwsyffdab.supabase.co/rest/v1/examples';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impxc2h2aW13cGVrbXdzeWZmZGFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQyNDk4ODksImV4cCI6MjAxOTgyNTg4OX0.cwOFsxJqgcxBPnGV47a8KnvzlQKoXzEs2r1cdxysVAs';

const headers = {
    "apikey": API_KEY,
    "Authorization": "Bearer " + API_KEY,
    'Prefer': 'return=representation'
};

export const getExamples = async () => {
    const response = await fetch(API_URL, { headers });
    return response.json();
}

export const getExampleById = async (id) => {
    const response = await fetch(`${API_URL}?id=eq.${id}`, { headers });
    return response.json();
}

export const getExamplesByName = async (name) => {
    const response = await fetch(`${API_URL}?name=eq.${name}`, { headers });
    return response.json();
}

export const getExamplesByAge = async (age) => {
    const response = await fetch(`${API_URL}?age=eq.${age}`, { headers });
    return response.json();
}

export const getExamplesByGender = async (gender) => {
    const response = await fetch(`${API_URL}?age=eq.${gender}`, { headers });
    return response.json();
}