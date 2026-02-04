import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

const AboutUs = () => {
  return (
    <div className="min-h-[calc(100vh-140px)] py-12">
      <div className="container space-y-12">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-primary">About Our Debate Club</h1>
          <p className="text-lg text-muted-foreground">Cultivating the Art of Argumentation and Critical Thinking</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                To provide students with a platform to develop persuasive speaking skills, engage in rigorous intellectual discourse, and compete at the highest levels of debate.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Our Vision</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                To create a thriving community of eloquent minds that will lead in critical thinking and communication across society.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>What We Offer</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 list-disc list-inside text-muted-foreground">
              <li>Formal debate tournaments and competitions</li>
              <li>Workshops on rhetoric and argumentation techniques</li>
              <li>Public speaking training and mentorship</li>
              <li>Networking with accomplished speakers and debate professionals</li>
              <li>Regional and national debate competition opportunities</li>
              <li>Community of supportive debate enthusiasts</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Why Join Us</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Whether you're a seasoned competitor or just beginning your debate journey, our club provides the resources, mentorship, and community you need to excel. We welcome students from all backgrounds and levels of experience. Through rigorous training and supportive teamwork, we help you develop critical thinking skills, master persuasive techniques, and build confidence in public speaking.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default AboutUs
