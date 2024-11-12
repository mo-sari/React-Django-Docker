// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';

// const useStyles = makeStyles((theme) => ({
// 	cardMedia: {
// 		paddingTop: '56.25%', // 16:9
// 	},
// 	link: {
// 		margin: theme.spacing(1, 1.5),
// 	},
// 	cardHeader: {
// 		backgroundColor:
// 			theme.palette.type === 'light'
// 				? theme.palette.grey[200]
// 				: theme.palette.grey[700],
// 	},
// 	postTitle: {
// 		fontSize: '16px',
// 		textAlign: 'left',
// 	},
// 	postText: {
// 		display: 'flex',
// 		justifyContent: 'left',
// 		alignItems: 'baseline',
// 		fontSize: '12px',
// 		textAlign: 'left',
// 		marginBottom: theme.spacing(2),
// 	},
// }));

// const Posts = (props) => {
// 	const { posts } = props;
// 	const classes = useStyles();
// 	if (!posts || posts.length === 0) return <p>Can not find any posts, sorry</p>;
// 	return (
// 		<React.Fragment>
// 			<Container maxWidth="md" component="main">
// 				<Grid container spacing={5} alignItems="flex-end">
// 					{posts.map((post) => {
// 						return (
// 							// Enterprise card is full width at sm breakpoint
// 							<Grid item key={post.id} xs={12} md={4}>
// 								<Card className={classes.card}>
// 									<CardMedia
// 										className={classes.cardMedia}
// 										image="https://source.unsplash.com/random"
// 										title="Image title"
// 									/>
// 									<CardContent className={classes.cardContent}>
// 										<Typography
// 											gutterBottom
// 											variant="h6"
// 											component="h2"
// 											className={classes.postTitle}
// 										>
// 											{post.title.substr(0, 50)}...
// 										</Typography>
// 										<div className={classes.postText}>
// 											<Typography
// 												component="p"
// 												color="textPrimary"
// 											></Typography>
// 											<Typography variant="p" color="textSecondary">
// 												{post.excerpt.substr(0, 60)}...
// 											</Typography>
// 										</div>
// 									</CardContent>
// 								</Card>
// 							</Grid>
// 						);
// 					})}
// 				</Grid>
// 			</Container>
// 		</React.Fragment>
// 	);
// };
// export default Posts;

/** @jsxImportSource @emotion/react */
import React from 'react';
import  styled  from '@emotion/styled';
import { Card, CardContent, CardMedia, Grid, Typography, Container } from '@mui/material';

const PostCardMedia = styled(CardMedia)(({ theme }) => ({
  paddingTop: '56.25%', // 16:9 aspect ratio
}));

const PostLink = styled('a')(({ theme }) => ({
  margin: theme.spacing(1, 1.5),
}));

const PostCardHeader = styled('div')(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
}));

const PostTitle = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  textAlign: 'left',
}));

const PostText = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'left',
  alignItems: 'baseline',
  fontSize: '12px',
  textAlign: 'left',
  marginBottom: theme.spacing(2),
}));

const Posts = ({ posts }) => {
  if (!posts || posts.length === 0) return <p>Can not find any posts, sorry</p>;

  return (
    <React.Fragment>
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {posts.map((post) => (
            <Grid item key={post.id} xs={12} md={4}>
              <Card>
                <PostCardMedia
                  image="https://source.unsplash.com/random"
                  title="Image title"
                />
                <CardContent>
                  <PostTitle gutterBottom variant="h6" component="h2">
                    {post.title.substr(0, 50)}...
                  </PostTitle>
                  <PostText>
                    <Typography component="p" color="textPrimary"></Typography>
                    <Typography variant="body2" color="textSecondary">
                      {post.excerpt.substr(0, 60)}...
                    </Typography>
                  </PostText>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Posts;
