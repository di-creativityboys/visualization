import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import { db } from '~/server/db'

export const dynamic = "force-dynamic"


export default async function NewsTab() {
  const articles = await db.articles.findMany()

  return (
    <Grid container spacing={2}>
      {articles.map((myArticle, index) => (
        <Grid item key={index} xs={6}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="/images/woman.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {myArticle?.headline ?? "no content"}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}