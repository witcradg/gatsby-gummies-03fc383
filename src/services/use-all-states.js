import { useStaticQuery, graphql } from "gatsby"

const useAllStates = () => {
    const allStates = useStaticQuery(
        graphql`
        query {
            allMarkdownRemark(
                filter: { frontmatter: { statename: { ne: null } } }
                sort: { frontmatter: { statename: ASC } }
            ) {
                nodes {
                    html
                    frontmatter {
                        date
                        slug
                        hhc_slug
                        legal_slug
                        statename
                        distribution
                    }
                }
            }
        }
    `)
    return allStates
}

export default useAllStates

