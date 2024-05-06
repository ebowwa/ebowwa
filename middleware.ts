import { NextRequest, NextResponse } from 'next/server'
import countries from '@/lib/countries.json'
import Cookies from 'js-cookie'

// run only on homepage
export const config = {
    matcher: '/',
}

export async function middleware(req: NextRequest) {
    const { nextUrl: url, geo } = req
    const country = geo.country || 'US'
    const city = geo.city || 'San Francisco'
    const region = geo.region || 'CA'

    const countryInfo = countries.find((x) => x.cca2 === country)

    const currencyCode = Object.keys(countryInfo.currencies)[0]
    const currency = countryInfo.currencies[currencyCode]
    const languages = Object.values(countryInfo.languages).join(', ')

    // Save the data as cookies
    Cookies.set('country', country)
    Cookies.set('city', city)
    Cookies.set('region', region)
    Cookies.set('currencyCode', currencyCode)
    Cookies.set('currencySymbol', currency.symbol)
    Cookies.set('currencyName', currency.name)
    Cookies.set('languages', languages)

    url.searchParams.set('country', country)
    url.searchParams.set('city', city)
    url.searchParams.set('region', region)
    url.searchParams.set('currencyCode', currencyCode)
    url.searchParams.set('currencySymbol', currency.symbol)
    url.searchParams.set('name', currency.name)
    url.searchParams.set('languages', languages)

    return NextResponse.rewrite(url)
}