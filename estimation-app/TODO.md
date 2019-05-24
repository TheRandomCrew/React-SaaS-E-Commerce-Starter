welcome: 
Lets see what kind of app you want

Is a single page web: 

1: set logo and company name
2: choose template or make your own
2.1: choose colors 
2.2: other: set typography, ln18i support, more pages: about, services, features, policy, terms, especify
5.3: edit page
a) Nav
    set layout
b) Hero
    choose image
    set text
        choose align
        choose size
    set button
        choose align
c) Features
    set layout
    set each feature
        set icon
        set text
d) CTA
    set layout
    set text
    set image or video
    set button
e) About Us
    set layout
    set text
    set image
    set button
f) Contact us
    set layout
    set text
    set button
g) Footer
    set layout
    set text
    set links
3: set Ads and mentions
4: Contact Info

Is an App

0) Is web, mobile or desktop app?
1) set logo and company name
2) set features
    + login
    + store
    + database (include backend)
        - data security
        - response time improvement
    + chat bot
    + Intro Tour
    + Upload images/ videos
    + download Office/PDF Archives
    + Set groups of users or Roles
    + site security 
    + SSL certificate
    + response time improve
    + set Ads and mentions
    + Other
3) choose template or make your own
    a) Set Home
    b) Set Login
    c) set all  the stuff
4) other: set typography, ln18i support, more pages: about, services, features, policy, terms, especify
5) Contact Info

is a Custom/Other Software

1) description
2) add design paper
3) add email, whatsapp, messenger or your preferred channel of communication

# Arch

## store
+ state: 
    - name
    - clientID
    - type
    - JSON
+ actions:
    - setState
    - submit

## service
send global state to API for ransom/invoice

## page
+ login (beta)
    Use Okta
+ home
    - Link to Main Page
    - Welcome
    - choose type
+ App
    - `/website`
    - `/app`
        + `/web`
            * `/info`
            * `/template`
            * `/features`
            * `/extra`
            * return to `/contact`
        + `/mobile`
        + `/desktop`
        + `/mix`
    -  `/other`
+ Contact
    collect all state, give userID, submit button, then return to Home

## JSON

{
    name,
    clientID,
    type,
    logo,
    description,
    template,
    details: 
    [
        {
            name,
            settings
        },
        {
            name,
            settings
        }
    ]
}

## Form

* form store (context)
    + state
        - step
        - ...JSON
    + action: 
        - setState
        - toggle
* Step Menu (router)
    + MenuLayout
        - type
        - step
    + StepLayout
        - Preview
        - Form

