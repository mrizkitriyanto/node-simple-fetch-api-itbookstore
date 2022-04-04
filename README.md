# Simple Fetch API (IT Bookstore)

## Step to reproduce
### 1. Install dependencies
``` shell
npm install
```
### 2. Run command
``` shell
# Production
npm run start-prod

# Development
npm run start-dev
```

## Process Manager on Server
### Install pm2
```shell
npm install -g pm2
```

### Start
```shell
pm2 start npm --name "itbookstore-api" -- run "start-prod"
```

### Other Command
```shell
# Restart
pm2 restart itbookstore-api

# Stop
pm2 stop itbookstore-api

# Start
pm2 start itbookstore-api
```

<br><br>
## Docs
| IT bookstore API URL | https://api.itbook.store/1.0/ |
|------------------|-------------------------------|
| API URL          | http://localhost:3000/        |
| Request Method   | REST (GET)                    |
| Response Format  | JSON                          |

<br>

### **Search**
Search books by title, author, ISBN or keywords

**_Request_**

```
/search/{query}
or
/search/{query}/{page}
```

**_Example Usage_**

```http
Request

http://localhost:3000/search/incident
or
http://localhost:3000/search/incident/2
```

```json
Response http://localhost:3000/search/incident

{
    "error": "0",
    "total": "27",
    "page": "1",
    "books": [
        {
            "title": "Cybersecurity Incident Response",
            "subtitle": "How to Contain, Eradicate, and Recover from Incidents",
            "isbn13": "9781484238691",
            "price": "$24.90",
            "image": "https://itbook.store/img/books/9781484238691.png",
            "url": "https://itbook.store/books/9781484238691"
        },
        {
            "title": "Security Monitoring",
            "subtitle": "Proven Methods for Incident Detection on Enterprise Networks",
            "isbn13": "9780596518165",
            "price": "$34.58",
            "image": "https://itbook.store/img/books/9780596518165.png",
            "url": "https://itbook.store/books/9780596518165"
        },
        {
            "title": "Intelligence-Driven Incident Response",
            "subtitle": "Outwitting the Adversary",
            "isbn13": "9781491934944",
            "price": "$42.88",
            "image": "https://itbook.store/img/books/9781491934944.png",
            "url": "https://itbook.store/books/9781491934944"
        },
        {
            "title": "Crafting the InfoSec Playbook",
            "subtitle": "Security Monitoring and Incident Response Master Plan",
            "isbn13": "9781491949405",
            "price": "$39.56",
            "image": "https://itbook.store/img/books/9781491949405.png",
            "url": "https://itbook.store/books/9781491949405"
        },
        {
            "title": "Computer Security, 2nd Edition",
            "subtitle": "",
            "isbn13": "9780321712332",
            "price": "$94.99",
            "image": "https://itbook.store/img/books/9780321712332.png",
            "url": "https://itbook.store/books/9780321712332"
        },
        {
            "title": "The Art of Memory Forensics",
            "subtitle": "Detecting Malware and Threats in Windows, Linux, and Mac Memory",
            "isbn13": "9781118825099",
            "price": "$34.00",
            "image": "https://itbook.store/img/books/9781118825099.png",
            "url": "https://itbook.store/books/9781118825099"
        },
        {
            "title": "Security Intelligence",
            "subtitle": "A Practitioner's Guide to Solving Enterprise Security Challenges",
            "isbn13": "9781118896693",
            "price": "$29.98",
            "image": "https://itbook.store/img/books/9781118896693.png",
            "url": "https://itbook.store/books/9781118896693"
        }
    ]
}
```
```json
Response http://localhost:3000/search/incident/2

{
    "error": "0",
    "total": "27",
    "page": "2",
    "books": [
        {
            "title": "PowerShell and Python Together",
            "subtitle": "Targeting Digital Investigations",
            "isbn13": "9781484245033",
            "price": "$25.80",
            "image": "https://itbook.store/img/books/9781484245033.png",
            "url": "https://itbook.store/books/9781484245033"
        },
        {
            "title": "Identity Attack Vectors",
            "subtitle": "Implementing an Effective Identity and Access Management Solution",
            "isbn13": "9781484251645",
            "price": "$26.19",
            "image": "https://itbook.store/img/books/9781484251645.png",
            "url": "https://itbook.store/books/9781484251645"
        },
        {
            "title": "Designing a HIPAA-Compliant Security Operations Center",
            "subtitle": "A Guide to Detecting and Responding to Healthcare Breaches and Events",
            "isbn13": "9781484256077",
            "price": "$27.47",
            "image": "https://itbook.store/img/books/9781484256077.png",
            "url": "https://itbook.store/books/9781484256077"
        },
        {
            "title": "Building Secure and Reliable Systems",
            "subtitle": "Best Practices for Designing, Implementing, and Maintaining Systems",
            "isbn13": "9781492083122",
            "price": "$49.92",
            "image": "https://itbook.store/img/books/9781492083122.png",
            "url": "https://itbook.store/books/9781492083122"
        },
        {
            "title": "Microsoft Azure Security Center",
            "subtitle": "",
            "isbn13": "9781509307036",
            "price": "$22.79",
            "image": "https://itbook.store/img/books/9781509307036.png",
            "url": "https://itbook.store/books/9781509307036"
        },
        {
            "title": "The Practice of Network Security Monitoring",
            "subtitle": "Understanding Incident Detection and Response",
            "isbn13": "9781593275099",
            "price": "$29.99",
            "image": "https://itbook.store/img/books/9781593275099.png",
            "url": "https://itbook.store/books/9781593275099"
        }
    ]
}
```

<br>

### **New**
Get new releases books

**_Request_**

```
/new
```

**_Example Usage_**

```http
Request

http://localhost:3000/new
```

```json
Response

{
    {
    "error": "0",
    "total": "6",
    "books": [
        {
            "title": "CI/CD with Docker and Kubernetes",
            "subtitle": "How to Deliver Cloud Native Applications at High Velocity",
            "isbn13": "1001649073143",
            "price": "$0.00",
            "image": "https://itbook.store/img/books/1001649073143.png",
            "url": "https://itbook.store/books/1001649073143"
        },
        {
            "title": "Machine Learning Bookcamp",
            "subtitle": "Build a portfolio of real-life projects",
            "isbn13": "9781617296819",
            "price": "$37.49",
            "image": "https://itbook.store/img/books/9781617296819.png",
            "url": "https://itbook.store/books/9781617296819"
        },
        {
            "title": "Apache Pulsar in Action",
            "subtitle": "",
            "isbn13": "9781617296888",
            "price": "$46.99",
            "image": "https://itbook.store/img/books/9781617296888.png",
            "url": "https://itbook.store/books/9781617296888"
        },
        {
            "title": "Ethical Hacking",
            "subtitle": "A Hands-on Introduction to Breaking In",
            "isbn13": "9781718501874",
            "price": "$33.12",
            "image": "https://itbook.store/img/books/9781718501874.png",
            "url": "https://itbook.store/books/9781718501874"
        },
        {
            "title": "Designing Secure Software",
            "subtitle": "A Guide for Developers",
            "isbn13": "9781718501928",
            "price": "$38.57",
            "image": "https://itbook.store/img/books/9781718501928.png",
            "url": "https://itbook.store/books/9781718501928"
        },
        {
            "title": "Practical Linux Forensics",
            "subtitle": "A Guide for Digital Investigators",
            "isbn13": "9781718501966",
            "price": "$44.19",
            "image": "https://itbook.store/img/books/9781718501966.png",
            "url": "https://itbook.store/books/9781718501966"
        }
    ]
}
```

<br>

### **Books**
Get book details by ISBN

**_Request_**

```
/books/{isbn13}
```

**_Example Usage_**

```http
Request

http://localhost:3000/books/9781617294136
```

```json
Response

{
    "error": "0"
    "title": "Securing DevOps"
    "subtitle": "Security in the Cloud"
    "authors": "Julien Vehent"
    "publisher": "Manning"
    "isbn10": "1617294136"
    "isbn13": "9781617294136"
    "pages": "384"
    "year": "2018"
    "rating": "5"
    "desc": "An application running in the cloud can benefit from incredible efficiencies, but they come with unique security threats too. A DevOps team's highest priority is understanding those risks and hardening the system against them.Securing DevOps teaches you the essential techniques to secure your cloud ..."
    "price": "$26.98"
    "image": "https://itbook.store/img/books/9781617294136.png"
    "url": "https://itbook.store/books/9781617294136"
    "pdf": {
              "Chapter 2": "https://itbook.store/files/9781617294136/chapter2.pdf",
              "Chapter 5": "https://itbook.store/files/9781617294136/chapter5.pdf"
           }
}
```
