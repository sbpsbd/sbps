# South Bangla Polli Sangstha (SBPS)

### Empowering Communities · Promoting Financial Inclusion · Building Sustainable Futures

**South Bangla Polli Sangstha (SBPS)** is a non-governmental microfinance and rural development organization based in Ullapara, Sirajganj, Bangladesh.

Established on **1 January 2013**, SBPS works to improve the socioeconomic conditions of underserved communities through inclusive financial services, savings mobilization, income-generating opportunities, and community-focused development.

## Organization Profile

| Particulars | Details |
|---|---|
| Organization name | South Bangla Polli Sangstha |
| Abbreviation | SBPS |
| Established | 1 January 2013 |
| Head office | Newargachha, Ullapara, Sirajganj, Bangladesh |
| Department of Social Services registration | Siraj-1021/2015 |
| Microcredit Regulatory Authority certificate | 32021-00057-00895 |

## Our Vision

A poverty-free, economically empowered, and socially inclusive society where everyone has the opportunity to achieve a better quality of life.

## Our Mission

To empower disadvantaged and underserved communities through accessible financial services, savings, income-generating opportunities, women's economic empowerment, and sustainable rural development.

## Our Objectives

- Contribute to poverty alleviation through responsible microfinance.
- Promote savings habits and financial inclusion.
- Support small businesses and micro-enterprises.
- Expand economic opportunities for rural women.
- Improve rural livelihoods and self-employment.
- Encourage social awareness and community participation.
- Support inclusive and sustainable socioeconomic development.

## Our Activities

- Microcredit and microenterprise financing.
- Member savings mobilization.
- Women's development and empowerment.
- Rural livelihood and enterprise support.
- Financial awareness and responsible borrowing.
- Community-oriented socioeconomic development initiatives.

## Our Impact at a Glance

*Organizational figures for FY 2024–2025.*

| Indicator | Total |
|---|---:|
| Members | 2,389 |
| Male members | 396 |
| Female members | 1,993 |
| Samities (groups) | 183 |
| Male samities | 8 |
| Female samities | 175 |
| Borrowers | 1,876 |
| Staff members | 19 |

## Our Values and Commitments

- **Transparency:** Working with openness and accountability.
- **Integrity:** Maintaining ethical and responsible practices.
- **Inclusion:** Expanding opportunities for underserved communities.
- **Empowerment:** Supporting women's participation and economic independence.
- **Sustainability:** Promoting lasting improvements in rural livelihoods.
- **Good governance:** Upholding institutional discipline and applicable regulatory requirements.

## Our Commitment to Bangladesh

We believe that empowered rural communities are essential to a stronger and more prosperous Bangladesh. Through inclusive financial services and community-focused initiatives, SBPS strives to contribute to meaningful and lasting socioeconomic progress.

---

**South Bangla Polli Sangstha (SBPS)**  
Newargachha, Ullapara, Sirajganj, Bangladesh

*Empowering People. Transforming Lives. Building a Better Future.*

© South Bangla Polli Sangstha.

## Website

The bilingual static website is maintained in the `site/` directory.

- `site/index.html` — website structure and English/Bangla content
- `site/styles.css` — responsive visual design
- `site/app.js` — language switcher, IPFS CID lookup and local SHA-256 utility
- `.github/workflows/deploy-ipfs.yml` — GitHub Actions workflow for publishing the `site/` directory to IPFS through Storacha

### Publish to IPFS

1. Create and verify a Storacha account, create a Space, and install the Storacha CLI on a trusted computer.
2. Generate a dedicated CI key with `storacha key create --json`.
3. Create a least-privilege delegation for that key with the capabilities `space/blob/add`, `space/index/add`, `filecoin/offer`, and `upload/add` using `storacha delegation create <DID> -c space/blob/add -c space/index/add -c filecoin/offer -c upload/add --base64`.
4. In GitHub, open **Settings → Secrets and variables → Actions → New repository secret**. Save the generated key as `STORACHA_PRINCIPAL` and the delegation output as `STORACHA_PROOF`. Never commit either value to this repository.
5. Merge the website changes into `main`. The workflow uploads `site/` on subsequent website changes. It can also be started manually from **Actions → Publish SBPS website to IPFS → Run workflow**.
6. Copy the resulting CID and gateway URL from the workflow summary. Keep a copy of each release CID in the organization's publication records.

The Storacha account, Space, and storage allowance are subject to the provider's current terms and quotas. A public IPFS CID is not access control: only publish approved public information. A CID identifies content; it does not independently certify the truth, approval, or legal validity of a document. The website's SHA-256 utility calculates a local file fingerprint only; it does not upload the file or create an on-chain record.
