'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface WorkExperienceCardProps {
  title: string;
  description: string;
  details: string[];
}

export function WorkExperienceCard({ title, description, details }: WorkExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const TRUNCATE_LIMIT = 2;

  const toggleExpanded = () => setIsExpanded(!isExpanded);

  const displayedDetails = isExpanded ? details : details.slice(0, TRUNCATE_LIMIT);

  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="list-disc list-inside space-y-2">
          {displayedDetails.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
        {details.length > TRUNCATE_LIMIT && (
          <Button variant="link" onClick={toggleExpanded} className="p-0 mt-2">
            {isExpanded ? 'Read Less' : 'Read More...'}
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
